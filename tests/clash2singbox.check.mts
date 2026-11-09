// node --experimental-strip-types tests/clash2singbox.check.mts
import { convert } from "../src/lib/clash2singbox.ts";

const assert = (c: boolean, m: string) => {
  if (!c) {
    console.error("FAIL:", m);
    process.exit(1);
  }
};

const yaml = `
port: 7890
socks-port: 7891
allow-lan: true
external-controller: 0.0.0.0:9090
secret: tok
dns:
  ipv6: false
  nameserver: [223.5.5.5, "https://doh.pub/dns-query"]
  fallback-filter:
    domain: ["+.google.com", ".youtube.com"]
proxies:
  - {name: t1, type: trojan, server: a.com, port: 443, password: pw, sni: a.com, client-fingerprint: chrome}
  - {name: h1, type: hysteria2, server: b.com, port: 443, password: pw, alpn: [h3]}
  - {name: y1, type: anytls, server: c.com, port: 8443, password: pw}
  - {name: ss1, type: ss, server: d.com, port: 1, cipher: aes-128-gcm, password: pw}
proxy-groups:
  - {name: Proxy, type: select, proxies: [Auto, t1, h1, y1, ss1]}
  - {name: Auto, type: url-test, proxies: [t1, h1], url: "https://x/generate_204", interval: 120}
  - {name: Empty, type: select, proxies: [nope]}
rules:
  - DOMAIN-SUFFIX,google.com,Proxy
  - DOMAIN-SUFFIX,youtube.com,Proxy
  - DOMAIN-KEYWORD,abc,DIRECT
  - IP-CIDR,1.1.1.1/32,DIRECT,no-resolve
  - GEOIP,CN,DIRECT
  - RULE-SET,x,Proxy
  - MATCH,Proxy
`;

const r = convert(yaml);
assert(!r.error, `error ${r.error}`);
const c: any = r.config;
assert(c.inbounds.length === 2 && c.inbounds[0].listen === "0.0.0.0" && c.inbounds[0].listen_port === 7890, "inbounds");
assert(c.outbounds.length === 7, "outbounds count " + c.outbounds.length); // 2 组 + 3 代理 + DIRECT/REJECT
assert(c.outbounds[0].type === "selector" && c.outbounds[0].default === "Auto", "selector default（组引用组）");
assert(c.outbounds[0].outbounds.join() === "Auto,t1,h1,y1", "selector members");
assert(c.outbounds[1].interval === "120s" && c.outbounds[1].url === "https://x/generate_204", "urltest");
assert(c.outbounds[2].tls.utls.fingerprint === "chrome", "trojan tls");
assert(c.outbounds[3].tls.alpn[0] === "h3", "hy2 alpn");
assert(c.outbounds[4].tls.utls.fingerprint === "chrome", "anytls 默认指纹");
assert(c.route.rules.length === 4, "规则合并 " + JSON.stringify(c.route.rules));
assert(c.route.rules[0].domain_suffix.join() === "google.com,youtube.com", "相邻同类型合并");
assert(c.route.rules[3].rule_set === "geoip-cn", "geoip 规则");
assert(c.route.rule_set[0].download_detour === "Proxy", "geoip rule_set");
assert(c.route.final === "Proxy" && c.route.default_domain_resolver === "domestic", "route final");
assert(c.dns.servers[0].server === "223.5.5.5" && c.dns.servers[1].detour === "Proxy", "dns servers");
assert(c.dns.rules[0].domain_suffix.join() === "google.com,youtube.com", "dns 外网域名");
assert(c.dns.strategy === "ipv4_only", "dns strategy");
assert(c.experimental.clash_api.external_controller === "0.0.0.0:9090", "clash_api");
assert(c.experimental.clash_api.secret === "tok", "clash_api secret");
assert(r.warnings.some((w) => w.includes("ss (ss1)")), "不支持协议需告警");
assert(r.warnings.some((w) => w.includes("Empty")), "空策略组告警");
assert(r.warnings.some((w) => w.includes("RULE-SET")), "RULE-SET 告警");

// 边界：坏 YAML、空配置、缺 proxies、缺省值
assert(!!convert("a: [").error, "坏 YAML");
assert(!!convert("").error, "空配置");
assert(!!convert("proxies: 1").error, "缺 proxies");
const min: any = convert("proxies:\n  - {name: t, type: trojan, server: a, port: 443, password: p}\n").config;
assert(min.inbounds[0].listen === "127.0.0.1" && min.inbounds[0].listen_port === 7890, "默认入站");
assert(min.experimental.clash_api.external_controller === "127.0.0.1:9090", "默认 controller");
assert(min.route.final === "Proxy" && min.route.rule_set === undefined, "默认 final");

console.log("✅ clash2singbox 转换自检通过");