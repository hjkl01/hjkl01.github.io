#!/usr/bin/env python3
"""本地 GitHub 项目分类管理页面（仅标准库，无额外运行依赖）。"""
from __future__ import annotations

import json
import os
import sys
import threading
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
from scripts.github_projects import connect_db, generate_markdown, migrate_legacy  # noqa: E402

HOST = "127.0.0.1"
PORT = int(os.environ.get("GITHUB_REVIEW_PORT", "8765"))
PAGE_SIZE_DEFAULT = 25
PAGE_SIZE_MAX = 100

HTML = r"""<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>GitHub 项目管理</title>
<style>
:root{color-scheme:light;--bg:#f5f7fb;--panel:#fff;--text:#172033;--muted:#697386;--line:#e5e9f0;--accent:#315efb;--accent2:#edf1ff;--green:#157347;--orange:#9a6700;--red:#b42318}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:14px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
header{background:#fff;border-bottom:1px solid var(--line);padding:20px max(24px,calc((100vw - 1440px)/2));display:flex;align-items:center;justify-content:space-between;gap:20px;position:sticky;top:0;z-index:3}
h1{font-size:22px;margin:0 0 3px}header p{margin:0;color:var(--muted)}button,input,select{font:inherit}button{border:1px solid var(--line);border-radius:8px;padding:8px 12px;background:#fff;color:var(--text);cursor:pointer}button:hover{border-color:#aab6ce}button.primary{background:var(--accent);color:#fff;border-color:var(--accent)}button:disabled{opacity:.45;cursor:not-allowed}
main{max-width:1440px;margin:24px auto;padding:0 24px}.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:18px}.stat,.panel{background:var(--panel);border:1px solid var(--line);border-radius:12px}.stat{padding:16px 18px}.stat label{color:var(--muted)}.stat strong{display:block;font-size:26px;margin-top:3px}
.panel{overflow:hidden}.toolbar{padding:16px;display:flex;flex-wrap:wrap;gap:10px;border-bottom:1px solid var(--line);align-items:center}.toolbar input{flex:1;min-width:220px}.toolbar input,.toolbar select,.edit-select{border:1px solid var(--line);border-radius:8px;padding:9px 10px;background:#fff;color:var(--text)}.hint{color:var(--muted);font-size:12px}
.table-wrap{overflow:auto}table{border-collapse:collapse;width:100%;min-width:980px}th,td{padding:12px 14px;text-align:left;border-bottom:1px solid var(--line);vertical-align:top}th{background:#fafbfe;color:var(--muted);font-size:12px;font-weight:650;white-space:nowrap}tbody tr:hover{background:#fafbff}tbody tr:last-child td{border-bottom:0}.repo{font-weight:650;color:#2448b8;text-decoration:none}.repo:hover{text-decoration:underline}.description{max-width:360px;color:#4b5565;white-space:normal;overflow-wrap:anywhere}.pill{display:inline-block;border-radius:99px;padding:3px 8px;background:#f0f2f6;color:#586174;font-size:12px;white-space:nowrap}.pill.manual{background:#e7f5ed;color:var(--green)}.pill.pending{background:#fff4d6;color:var(--orange)}.actions{display:flex;gap:6px;align-items:center}.actions button{padding:6px 9px}.footer{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;color:var(--muted)}.pagination{display:flex;align-items:center;gap:8px}.bulkbar{display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:12px 16px;background:#f9faff;border-bottom:1px solid var(--line)}.bulkbar select{max-width:220px}.notice{position:fixed;right:22px;bottom:22px;z-index:5;max-width:420px;padding:12px 16px;background:#172033;color:#fff;border-radius:10px;box-shadow:0 8px 30px #17203333}.notice.error{background:var(--red)}.empty{text-align:center;padding:48px;color:var(--muted)}.edit-select{max-width:190px;min-width:150px;padding:7px}.small{font-size:12px;color:var(--muted)}
@media(max-width:760px){header{position:static;padding:16px;align-items:flex-start;flex-direction:column}main{padding:0 12px;margin:14px auto}.stats{grid-template-columns:repeat(2,minmax(0,1fr))}.stat{padding:12px}.stat strong{font-size:22px}.toolbar input{min-width:100%}.footer{align-items:flex-start;flex-direction:column}}
</style></head>
<body>
<header><div><h1>GitHub 项目管理</h1><p>SQLite 分类审核 · 修改自动保存 · 仅本机访问</p></div><div class="actions"><button id="refresh">刷新</button><button id="rebuild" class="primary">生成 Markdown</button></div></header>
<main>
<section class="stats">
<div class="stat"><label>全部项目</label><strong id="total">—</strong></div>
<div class="stat"><label>待审核</label><strong id="pending">—</strong></div>
<div class="stat"><label>人工分类</label><strong id="manual">—</strong></div>
<div class="stat"><label>分类异常</label><strong id="uncategorized">—</strong></div>
</section>
<section class="panel">
<div class="toolbar">
<input id="q" placeholder="搜索仓库名称、地址或简介…">
<select id="category"><option value="">全部分类</option></select>
<select id="status"><option value="">全部审核状态</option><option value="pending">待审核</option><option value="confirmed">已审核</option><option value="manual">人工修改</option></select>
<select id="sort"><option value="name">按名称排序</option><option value="category">按分类排序</option><option value="updated">按更新时间排序</option><option value="id">按入库顺序排序</option></select>
<button id="clear">清除筛选</button>
</div>
<div class="bulkbar"><label><input type="checkbox" id="selectPage"> 选择本页</label><span id="selectedCount" class="hint">已选 0 项</span><select id="bulkCategory"><option value="">批量修改分类…</option></select><button id="bulkApply">应用分类</button><button id="bulkAccept">接受自动建议</button><button id="bulkConfirm">标记已审核</button></div>
<div class="table-wrap"><table><thead><tr><th></th><th>项目</th><th>简介</th><th>当前分类</th><th>自动建议</th><th>审核状态</th><th>操作</th></tr></thead><tbody id="rows"><tr><td colspan="7" class="empty">正在加载…</td></tr></tbody></table></div>
<div class="footer"><span id="resultCount">—</span><div class="pagination"><button id="prev">上一页</button><span id="pageInfo">1 / 1</span><button id="next">下一页</button><select id="pageSize"><option>25</option><option>50</option><option>100</option></select></div></div>
</section>
<p class="hint">分类修改立即写入 SQLite。自动分类只更新建议，不覆盖人工分类。生成页面会更新 notes/github 下的分类 Markdown 文件。</p>
</main><div id="notice" hidden class="notice"></div>
<script>
const $=id=>document.getElementById(id);let page=1,totalPages=1,projects=[],selected=new Set(),meta={categories:[]},noticeTimer,searchTimer;
function notice(text,error=false){const n=$('notice');n.textContent=text;n.className='notice'+(error?' error':'');n.hidden=false;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>n.hidden=true,4000)}
async function api(url,options={}){const r=await fetch(url,{headers:{'Content-Type':'application/json'},...options});let data;try{data=await r.json()}catch{throw new Error('服务器返回了无效响应')}if(!r.ok)throw new Error(data.error||('HTTP '+r.status));return data}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function categoryOptions(value){return '<option value="未分类" '+(value==='未分类'?'selected':'')+'>未分类</option>'+meta.categories.filter(c=>c!=='未分类').map(c=>'<option value="'+esc(c)+'" '+(c===value?'selected':'')+'>'+esc(c)+'</option>').join('')+'<option value="__new__">＋新建分类…</option>'}
async function loadMeta(){meta=await api('/api/meta');$('total').textContent=meta.total;$('pending').textContent=meta.pending;$('manual').textContent=meta.manual;$('uncategorized').textContent=meta.uncategorized;
const current=$('category').value; $('category').innerHTML='<option value="">全部分类</option>'+meta.categories.map(c=>'<option value="'+esc(c)+'">'+esc(c)+'</option>').join('');$('category').value=current;
$('bulkCategory').innerHTML='<option value="">批量修改分类…</option>'+meta.categories.filter(c=>c!=='未分类').map(c=>'<option value="'+esc(c)+'">'+esc(c)+'</option>').join('')+'<option value="未分类">未分类</option><option value="__new__">＋新建分类…</option>'}
async function load(){try{await loadMeta();const p=new URLSearchParams({q:$('q').value,category:$('category').value,status:$('status').value,sort:$('sort').value,page:String(page),page_size:$('pageSize').value});const d=await api('/api/projects?'+p);projects=d.items;totalPages=d.pages;$('resultCount').textContent='显示 '+(d.total?((page-1)*Number($('pageSize').value)+1):0)+'–'+Math.min(page*Number($('pageSize').value),d.total)+' 项，共 '+d.total+' 项';$('pageInfo').textContent=page+' / '+totalPages;$('prev').disabled=page<=1;$('next').disabled=page>=totalPages;render()}catch(e){notice(e.message,true)}}
function render(){const body=$('rows');if(!projects.length){body.innerHTML='<tr><td colspan="7" class="empty">没有符合条件的项目</td></tr>';return}
body.innerHTML=projects.map(p=>'<tr><td><input type="checkbox" class="pick" data-id="'+p.id+'" '+(selected.has(p.id)?'checked':'')+'></td><td><a class="repo" href="'+esc(p.url)+'" target="_blank" rel="noopener noreferrer">'+esc(p.full_name)+'</a><div class="small">'+esc(p.updated_at||'')+'</div></td><td class="description">'+esc(p.description||'暂无简介')+'</td><td><select class="edit-select category-edit" data-id="'+p.id+'">'+categoryOptions(p.category)+'</select></td><td>'+esc(p.auto_category||'—')+'</td><td><span class="pill '+(p.category_source==='manual'?'manual':p.category_status!=='confirmed'?'pending':'')+'">'+(p.category_source==='manual'?'人工修改':p.category_status==='confirmed'?'已审核':'待审核')+'</span></td><td><div class="actions"><button data-action="accept" data-id="'+p.id+'" '+(!p.auto_category?'disabled':'')+'>接受建议</button><button data-action="confirm" data-id="'+p.id+'">确认</button></div></td></tr>').join('');$('selectPage').checked=projects.length>0&&projects.every(p=>selected.has(p.id));$('selectedCount').textContent='已选 '+selected.size+' 项'}
async function update(id,category,action='manual'){try{await api('/api/projects/update',{method:'POST',body:JSON.stringify({id,category,action})});notice('已保存');await load()}catch(e){notice(e.message,true)}}
$('rows').addEventListener('change',e=>{const t=e.target;if(t.classList.contains('category-edit')){if(t.value==='__new__'){const name=prompt('输入新分类名称');if(name&&name.trim())update(Number(t.dataset.id),name.trim(),'manual');else load()}else update(Number(t.dataset.id),t.value,'manual')};if(t.classList.contains('pick')){const id=Number(t.dataset.id);t.checked?selected.add(id):selected.delete(id);$('selectedCount').textContent='已选 '+selected.size+' 项';$('selectPage').checked=projects.length>0&&projects.every(p=>selected.has(p.id))}});
$('rows').addEventListener('click',async e=>{const b=e.target.closest('button[data-action]');if(!b)return;const p=projects.find(x=>x.id===Number(b.dataset.id));if(!p)return;if(b.dataset.action==='accept')update(p.id,p.auto_category,'accept');else update(p.id,p.category,'confirm')});
$('selectPage').addEventListener('change',()=>{projects.forEach(p=>$('selectPage').checked?selected.add(p.id):selected.delete(p.id));render()});
$('bulkCategory').onchange=()=>{if($('bulkCategory').value==='__new__'){const name=prompt('输入新分类名称');if(name&&name.trim())$('bulkCategory').add(new Option(name.trim(),name.trim(),true,true));else $('bulkCategory').value=''}};
$('bulkApply').onclick=async()=>{if(!selected.size)return notice('请先选择项目',true);const category=$('bulkCategory').value;if(!category)return notice('请选择目标分类',true);try{await api('/api/projects/bulk',{method:'POST',body:JSON.stringify({ids:[...selected],category,action:'manual'})});selected.clear();notice('已批量修改分类');await load()}catch(e){notice(e.message,true)}};
$('bulkAccept').onclick=async()=>{if(!selected.size)return notice('请先选择项目',true);try{const d=await api('/api/projects/bulk',{method:'POST',body:JSON.stringify({ids:[...selected],action:'accept'})});selected.clear();notice('已接受 '+d.updated+' 个项目的自动建议');await load()}catch(e){notice(e.message,true)}};
$('bulkConfirm').onclick=async()=>{if(!selected.size)return notice('请先选择项目',true);try{const d=await api('/api/projects/bulk',{method:'POST',body:JSON.stringify({ids:[...selected],action:'confirm'})});selected.clear();notice('已确认 '+d.updated+' 个项目');await load()}catch(e){notice(e.message,true)}};
$('refresh').onclick=()=>load();$('clear').onclick=()=>{$('q').value='';$('category').value='';$('status').value='';$('sort').value='name';page=1;selected.clear();load()};$('prev').onclick=()=>{if(page>1){page--;load()}};$('next').onclick=()=>{if(page<totalPages){page++;load()}};$('pageSize').onchange=()=>{page=1;load()};['category','status','sort'].forEach(id=>$(id).onchange=()=>{page=1;load()});$('q').oninput=()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>{page=1;load()},250)};
$('rebuild').onclick=async()=>{if(!confirm('根据 SQLite 中的最终分类重新生成 notes/github 的 Markdown 文件？'))return;try{const d=await api('/api/build',{method:'POST',body:'{}'});notice(d.message)}catch(e){notice(e.message,true)}};
load();
</script></body></html>"""


def json_response(handler: BaseHTTPRequestHandler, status: int, data: object) -> None:
    body = json.dumps(data, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.send_header("Cache-Control", "no-store")
    handler.end_headers()
    handler.wfile.write(body)


def project_columns(conn) -> set[str]:
    return {row["name"] for row in conn.execute("PRAGMA table_info(projects)")}


class ReviewHandler(BaseHTTPRequestHandler):
    server_version = "GitHubProjectReview/1.0"

    def log_message(self, fmt: str, *args) -> None:
        print("[review] " + (fmt % args))

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/":
            body = HTML.encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
            return
        if parsed.path == "/api/meta":
            self.handle_meta()
        elif parsed.path == "/api/projects":
            self.handle_projects(parse_qs(parsed.query))
        else:
            json_response(self, 404, {"error": "接口不存在"})

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path not in {"/api/projects/update", "/api/projects/bulk", "/api/build"}:
            json_response(self, 404, {"error": "接口不存在"})
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length > 1_000_000:
                json_response(self, 413, {"error": "请求体过大"})
                return
            payload = json.loads(self.rfile.read(length) or b"{}")
            if not isinstance(payload, dict):
                raise ValueError("请求格式必须是 JSON 对象")
            if parsed.path == "/api/projects/update":
                self.update_project(payload)
            elif parsed.path == "/api/projects/bulk":
                self.bulk_update(payload)
            else:
                with connect_db() as conn:
                    generate_markdown(conn)
                json_response(self, 200, {"message": "Markdown 已生成，输出目录：notes/github"})
        except (ValueError, TypeError, json.JSONDecodeError) as exc:
            json_response(self, 400, {"error": str(exc)})
        except Exception as exc:
            json_response(self, 500, {"error": f"操作失败：{exc}"})

    def handle_meta(self) -> None:
        with connect_db() as conn:
            total = conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0]
            pending = conn.execute("SELECT COUNT(*) FROM projects WHERE category_status <> 'confirmed'").fetchone()[0]
            manual = conn.execute("SELECT COUNT(*) FROM projects WHERE category_source = 'manual'").fetchone()[0]
            uncategorized = conn.execute(
                "SELECT COUNT(*) FROM projects WHERE category IS NULL OR trim(category) = '' OR category = '未分类'"
            ).fetchone()[0]
            categories = [
                row["category"] for row in conn.execute(
                    "SELECT category FROM projects WHERE category IS NOT NULL AND trim(category) <> '' "
                    "GROUP BY category COLLATE NOCASE ORDER BY category COLLATE NOCASE"
                )
            ]
        json_response(self, 200, {"total": total, "pending": pending, "manual": manual,
                                  "uncategorized": uncategorized, "categories": categories})

    def handle_projects(self, query: dict[str, list[str]]) -> None:
        q = query.get("q", [""])[0].strip()
        category = query.get("category", [""])[0].strip()
        status = query.get("status", [""])[0].strip()
        sort = query.get("sort", ["name"])[0]
        try:
            page = max(1, int(query.get("page", ["1"])[0]))
            page_size = min(PAGE_SIZE_MAX, max(1, int(query.get("page_size", [str(PAGE_SIZE_DEFAULT)])[0])))
        except ValueError:
            json_response(self, 400, {"error": "page 和 page_size 必须是整数"})
            return
        where: list[str] = []
        params: list[object] = []
        if q:
            pattern = f"%{q}%"
            where.append("(full_name LIKE ? OR url LIKE ? OR name LIKE ? OR description LIKE ?)")
            params.extend([pattern] * 4)
        if category:
            where.append("category = ? COLLATE NOCASE")
            params.append(category)
        if status == "pending":
            where.append("category_status <> 'confirmed'")
        elif status == "confirmed":
            where.append("category_status = 'confirmed'")
        elif status == "manual":
            where.append("category_source = 'manual'")
        elif status:
            json_response(self, 400, {"error": "无效的审核状态"})
            return
        order_by = {"name": "full_name COLLATE NOCASE", "category": "category COLLATE NOCASE, full_name COLLATE NOCASE",
                    "updated": "updated_at DESC, id DESC", "id": "id DESC"}.get(sort)
        if not order_by:
            json_response(self, 400, {"error": "无效的排序字段"})
            return
        clause = " WHERE " + " AND ".join(where) if where else ""
        with connect_db() as conn:
            total = conn.execute("SELECT COUNT(*) FROM projects" + clause, params).fetchone()[0]
            rows = conn.execute(
                "SELECT id, full_name, name, url, description, category, auto_category, category_source, "
                "category_status, updated_at FROM projects" + clause + " ORDER BY " + order_by + " LIMIT ? OFFSET ?",
                [*params, page_size, (page - 1) * page_size],
            ).fetchall()
        json_response(self, 200, {"items": [dict(row) for row in rows], "total": total,
                                  "page": page, "page_size": page_size, "pages": max(1, (total + page_size - 1) // page_size)})

    @staticmethod
    def validate_category(value: object, conn) -> str:
        if not isinstance(value, str):
            raise ValueError("分类名称必须是字符串")
        category = " ".join(value.split())
        if not category:
            raise ValueError("分类名称不能为空")
        if len(category) > 80:
            raise ValueError("分类名称不能超过 80 个字符")
        existing = conn.execute(
            "SELECT category FROM projects WHERE category = ? COLLATE NOCASE LIMIT 1", (category,)
        ).fetchone()
        return existing["category"] if existing else category

    def update_project(self, payload: dict) -> None:
        try:
            project_id = int(payload.get("id"))
        except (ValueError, TypeError):
            raise ValueError("项目 ID 无效")
        action = payload.get("action", "manual")
        with connect_db() as conn:
            row = conn.execute("SELECT id, category, auto_category FROM projects WHERE id = ?", (project_id,)).fetchone()
            if row is None:
                json_response(self, 404, {"error": "项目不存在"})
                return
            if action == "accept":
                category = self.validate_category(row["auto_category"], conn)
                source = "manual"
            elif action == "confirm":
                category = self.validate_category(payload.get("category", row["category"]), conn)
                source = "manual" if payload.get("category") is not None else row["category_source"]
            elif action == "manual":
                category = self.validate_category(payload.get("category"), conn)
                source = "manual"
            else:
                raise ValueError("无效的操作")
            conn.execute(
                "UPDATE projects SET category = ?, category_source = ?, category_status = 'confirmed', "
                "updated_at = CURRENT_TIMESTAMP WHERE id = ?",
                (category, source, project_id),
            )
        json_response(self, 200, {"updated": 1, "category": category})

    def bulk_update(self, payload: dict) -> None:
        ids = payload.get("ids")
        action = payload.get("action", "manual")
        if not isinstance(ids, list) or not ids or len(ids) > 1000:
            raise ValueError("请提供 1–1000 个项目 ID")
        try:
            ids = list(dict.fromkeys(int(item) for item in ids))
        except (TypeError, ValueError):
            raise ValueError("项目 ID 必须是整数")
        with connect_db() as conn:
            placeholders = ",".join("?" for _ in ids)
            rows = conn.execute(
                f"SELECT id, category, auto_category, category_source FROM projects WHERE id IN ({placeholders})", ids
            ).fetchall()
            if len(rows) != len(ids):
                raise ValueError("部分项目不存在，请刷新后重试")
            if action == "manual":
                category = self.validate_category(payload.get("category"), conn)
                updates = [(category, "manual", row["id"]) for row in rows]
            elif action == "accept":
                updates = []
                for row in rows:
                    if not row["auto_category"] or not row["auto_category"].strip():
                        continue
                    category = self.validate_category(row["auto_category"], conn)
                    updates.append((category, "manual", row["id"]))
            elif action == "confirm":
                updates = [(row["category"] or "未分类", row["category_source"], row["id"]) for row in rows]
            else:
                raise ValueError("无效的批量操作")
            conn.executemany(
                "UPDATE projects SET category = ?, category_source = ?, category_status = 'confirmed', "
                "updated_at = CURRENT_TIMESTAMP WHERE id = ?", updates,
            )
        json_response(self, 200, {"updated": len(updates)})


class LocalServer(ThreadingHTTPServer):
    daemon_threads = True
    allow_reuse_address = True


def main() -> None:
    if PORT < 1 or PORT > 65535:
        raise SystemExit("GITHUB_REVIEW_PORT 必须在 1–65535 之间")
    with connect_db() as conn:
        if conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0] == 0:
            migrate_legacy(conn)
    try:
        server = LocalServer((HOST, PORT), ReviewHandler)
    except OSError as exc:
        raise SystemExit(f"无法启动管理页面（{HOST}:{PORT}）：{exc}") from exc
    url = f"http://{HOST}:{PORT}"
    print(f"GitHub 项目管理页面：{url}")
    print("服务仅监听本机地址。按 Ctrl+C 退出。")
    threading.Timer(0.8, lambda: webbrowser.open(url)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n正在关闭管理页面…")
    finally:
        server.shutdown()
        server.server_close()


if __name__ == "__main__":
    main()
