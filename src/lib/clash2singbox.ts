import { load } from "js-yaml";

// GEOIP,CN 需要远程规则集
const GEOIP_CN_URL = "https://raw.githubusercontent.com/SagerNet/sing-geoip/rule-set/geoip-cn.srs";

const RULE_KEYS: Record<string, string> = {
  DOMAIN: "domain",
  "DOMAIN-SUFFIX": "domain_suffix",
  "DOMAIN-KEYWORD": "domain_keyword",
  "IP-CIDR": "ip_cidr",
  "IP-CIDR6": "ip_cidr",
};

type Json = Record<string, any>;

function tls(server: string, sni?: string, alpn?: string[], fingerprint?: string): Json {
  const t: Json = { enabled: true, server_name: sni || server };
  if (alpn?.length) t.alpn = alpn;
  if (fingerprint) t.utls = { enabled: true, fingerprint };
  return t;
}

function proxyOutbound(p: Json): Json | null {
  const base: Json = { tag: p.name, type: p.type, server: p.server, server_port: p.port };
  const kind = p.type;
  if (kind === "trojan" || kind === "hysteria2") {
    base.password = p.password;
    base.tls = tls(p.server, p.sni, p.alpn, p["client-fingerprint"]);
  } else if (kind === "anytls") {
    base.password = p.password;
    base.tls = tls(p.server, p.sni, undefined, p["client-fingerprint"] || "chrome");
  } else {
    return null;
  }
  return base;
}

function groupOutbound(g: Json, tags: Set<string>): Json | null {
  const members = (g.proxies || []).filter((m: string) => tags.has(m));
  if (!members.length) return null;
  if (g.type === "select") {
    return { type: "selector", tag: g.name, outbounds: members, default: members[0] };
  }
  if (g.type === "url-test") {
    return {
      type: "urltest",
      tag: g.name,
      outbounds: members,
      url: g.url || "https://www.gstatic.com/generate_204",
      interval: `${g.interval || 300}s`,
    };
  }
  return null;
}

// 相邻同类型同出站的规则合并
function convertRules(clashRules: string[], warn: (m: string) => void) {
  const out: Json[] = [];
  let final: string | undefined;
  let geoip = false;
  for (const raw of clashRules) {
    const parts = String(raw).split(",").map((x) => x.trim());
    const [kind, value, target] = [parts[0], parts[1], parts[parts.length - 1]];
    if (kind === "MATCH") {
      final = target;
      continue;
    }
    if (kind === "GEOIP") {
      geoip = true;
      out.push({ rule_set: `geoip-${value.toLowerCase()}`, outbound: target });
      continue;
    }
    const key = RULE_KEYS[kind];
    if (kind === "RULE-SET" || !key) {
      warn(`跳过不支持的规则: ${raw}`);
      continue;
    }
    const last = out[out.length - 1];
    if (last && Object.keys(last).join() === `${key},outbound` && last.outbound === target) {
      last[key].push(value);
    } else {
      out.push({ [key]: [value], outbound: target });
    }
  }
  return { rules: out, final, geoip };
}

export function convert(text: string): { config?: Json; warnings: string[]; error?: string } {
  const warnings: string[] = [];
  const warn = (m: string) => warnings.push(m);

  let cfg: Json;
  try {
    cfg = load(text) as Json;
  } catch (e) {
    return { warnings, error: `YAML 解析失败: ${(e as Error).message}` };
  }
  if (!cfg || typeof cfg !== "object") return { warnings, error: "配置为空" };
  if (!Array.isArray(cfg.proxies)) return { warnings, error: "配置里没有 proxies" };

  const proxies: Json[] = [];
  for (const p of cfg.proxies) {
    const o = proxyOutbound(p);
    if (o) proxies.push(o);
    else warn(`不支持的代理类型: ${p?.type} (${p?.name})`);
  }
  const groupsIn: Json[] = cfg["proxy-groups"] || [];
  // 策略组可以引用别的策略组，先把所有 tag 收齐再填成员
  const tags = new Set<string>([...proxies.map((p) => p.tag), ...groupsIn.map((g) => g.name)]);
  const groups: Json[] = [];
  for (const g of groupsIn) {
    const o = groupOutbound(g, tags);
    if (o) groups.push(o);
    else warn(`跳过空的或类型不支持的策略组: ${g?.type} (${g?.name})`);
  }

  const outbounds = [...groups, ...proxies, { type: "direct", tag: "DIRECT" }, { type: "block", tag: "REJECT" }];
  const { rules, final, geoip } = convertRules(cfg.rules || [], warn);

  // DNS: 国内直查，fallback-filter 里的域名走代理解析
  const dnsIn = cfg.dns || {};
  const nameservers: string[] = (dnsIn.nameserver || []).filter((s: unknown) => typeof s === "string");
  const domestic = nameservers.find((s) => /^\d/.test(s)) || "223.5.5.5";
  const dns: Json = {
    servers: [
      { tag: "domestic", type: "udp", server: domestic },
      { tag: "remote", type: "https", server: "1.1.1.1", detour: "Proxy" },
    ],
    rules: [],
    final: "domestic",
    strategy: dnsIn.ipv6 ? "prefer_ipv4" : "ipv4_only",
  };
  const foreign: string[] = ((dnsIn["fallback-filter"] || {}).domain || []).map((d: string) =>
    d.replace(/^\+?\./, ""),
  );
  if (foreign.length) dns.rules.push({ domain_suffix: foreign, server: "remote" });

  const listen = cfg["allow-lan"] ? "0.0.0.0" : "127.0.0.1";
  const inbounds: Json[] = [{ type: "mixed", tag: "mixed-in", listen, listen_port: cfg.port || 7890 }];
  if (cfg["socks-port"]) {
    inbounds.push({ type: "socks", tag: "socks-in", listen, listen_port: cfg["socks-port"] });
  }

  const route: Json = {
    rules,
    final: final || "Proxy",
    default_domain_resolver: "domestic",
  };
  if (geoip) {
    route.rule_set = [
      {
        tag: "geoip-cn",
        type: "remote",
        format: "binary",
        url: GEOIP_CN_URL,
        // shortcut: 1.14 起 download_detour 已废弃（1.16 移除），等 1.16 再改新写法
        download_detour: "Proxy",
      },
    ];
  }

  const ctl = String(cfg["external-controller"] || "127.0.0.1:9090");
  const colon = ctl.lastIndexOf(":");
  const ctlHost = colon > 0 ? ctl.slice(0, colon) : "127.0.0.1";
  const ctlPort = colon > 0 ? ctl.slice(colon + 1) : ctl;
  const config = {
    log: { level: "warn", timestamp: true },
    dns,
    inbounds,
    outbounds,
    route,
    experimental: { clash_api: { external_controller: `${ctlHost}:${ctlPort || "9090"}`, secret: cfg.secret || "" } },
  };
  return { config, warnings };
}