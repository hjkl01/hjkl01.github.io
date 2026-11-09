import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { convert } from "../lib/clash2singbox";

export default function Clash2Singbox(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [warnings, setWarnings] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    if (!output) return "";
    try {
      const cfg = JSON.parse(output);
      return `入站 ${cfg.inbounds.length} 个，出站 ${cfg.outbounds.length} 个，规则 ${cfg.route.rules.length} 条`;
    } catch {
      return "";
    }
  }, [output]);

  const run = () => {
    const r = convert(input);
    setError(r.error || "");
    setWarnings(r.warnings);
    setOutput(r.config ? JSON.stringify(r.config, null, 2) : "");
    setCopied(false);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
  };

  const download = () => {
    const url = URL.createObjectURL(new Blob([output], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "config.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Layout title={`Clash 转 sing-box | ${siteConfig.title}`} description="在线把 clash/mihomo 配置转换成 sing-box 配置，纯浏览器本地转换">
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold mb-2">Clash → sing-box 配置转换</h1>
        <p className="text-gray-500 mb-4 text-sm">
          粘贴 clash/mihomo YAML，转换全部在浏览器本地完成，配置不会上传。支持 trojan / hysteria2 / anytls 与 select / url-test 策略组。
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <textarea
            className="border border-gray-300 rounded p-3 w-full h-[60vh] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="粘贴 clash / mihomo 配置（YAML）..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
          />
          <textarea
            className="border border-gray-300 rounded p-3 w-full h-[60vh] font-mono text-sm bg-gray-50 focus:outline-none"
            placeholder="sing-box 配置（JSON）..."
            value={output}
            readOnly
            spellCheck={false}
          />
        </div>

        <div className="flex flex-wrap gap-2 my-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={run} disabled={!input.trim()}>
            转换
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300" onClick={copy} disabled={!output}>
            {copied ? "已复制" : "复制 JSON"}
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300" onClick={download} disabled={!output}>
            下载 config.json
          </button>
          {stats && <span className="self-center text-sm text-gray-500">{stats}</span>}
        </div>

        {error && <div className="p-3 bg-red-100 text-red-700 rounded mb-4">{error}</div>}
        {warnings.length > 0 && (
          <ul className="p-3 bg-yellow-50 text-yellow-800 rounded mb-4 text-sm list-disc list-inside">
            {warnings.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        )}

        <div className="text-sm text-gray-500 space-y-1">
          <p>输出保存为 ~/.config/sing-box/config.json，先 `sing-box check -c` 校验，再 `sing-box run -c` 启动。</p>
          <p>入站端口沿用原配置里的 port / socks-port；如果本机端口被 mihomo 占用，改一下再保存。</p>
        </div>
      </div>
    </Layout>
  );
}