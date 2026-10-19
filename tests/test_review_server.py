"""本地项目管理 API 的回归测试。运行：python -m unittest discover -s tests -v"""
from __future__ import annotations

import json
import threading
import tempfile
import unittest
from pathlib import Path
from urllib.error import HTTPError
from urllib.request import Request, urlopen

from scripts import github_projects
from scripts import review_server


class ReviewServerTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp_dir = tempfile.TemporaryDirectory()
        self.original_db_path = github_projects.DB_PATH
        github_projects.DB_PATH = Path(self.temp_dir.name) / "projects.db"
        with review_server.connect_db() as conn:
            conn.executemany(
                """
                INSERT INTO projects
                    (full_name, name, url, description, category, auto_category,
                     category_source, category_status)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """,
                [
                    ("demo/agent", "agent", "https://github.com/demo/agent", "agent framework",
                     "工具", "AI Agent", "auto", "pending"),
                    ("demo/cli", "cli", "https://github.com/demo/cli", "command line tool",
                     "DevOps", "DevOps", "manual", "confirmed"),
                ],
            )
        self.server = review_server.LocalServer(("127.0.0.1", 0), review_server.ReviewHandler)
        self.base_url = f"http://127.0.0.1:{self.server.server_address[1]}"
        self.thread = threading.Thread(target=self.server.serve_forever, daemon=True)
        self.thread.start()

    def tearDown(self) -> None:
        self.server.shutdown()
        self.server.server_close()
        self.thread.join(timeout=2)
        github_projects.DB_PATH = self.original_db_path
        self.temp_dir.cleanup()

    def request_json(self, path: str, payload: dict | None = None) -> tuple[int, dict]:
        data = None if payload is None else json.dumps(payload).encode("utf-8")
        request = Request(
            self.base_url + path,
            data=data,
            headers={"Content-Type": "application/json"},
            method="GET" if payload is None else "POST",
        )
        try:
            with urlopen(request, timeout=3) as response:
                return response.status, json.loads(response.read().decode("utf-8"))
        except HTTPError as exc:
            return exc.code, json.loads(exc.read().decode("utf-8"))

    def test_meta_and_search_pagination(self) -> None:
        status, meta = self.request_json("/api/meta")
        self.assertEqual(status, 200)
        self.assertEqual(meta["total"], 2)
        self.assertEqual(meta["pending"], 1)
        self.assertEqual(meta["manual"], 1)

        status, data = self.request_json("/api/projects?q=agent&page=1&page_size=1")
        self.assertEqual(status, 200)
        self.assertEqual(data["total"], 1)
        self.assertEqual(data["items"][0]["full_name"], "demo/agent")

    def test_manual_category_update_is_persisted(self) -> None:
        status, data = self.request_json(
            "/api/projects/update", {"id": 1, "category": "AI Agent", "action": "manual"}
        )
        self.assertEqual(status, 200)
        self.assertEqual(data["category"], "AI Agent")
        with review_server.connect_db() as conn:
            row = conn.execute(
                "SELECT category, category_source, category_status FROM projects WHERE id = 1"
            ).fetchone()
        self.assertEqual(row["category"], "AI Agent")
        self.assertEqual(row["category_source"], "manual")
        self.assertEqual(row["category_status"], "confirmed")

    def test_accept_suggestion_and_reject_invalid_category(self) -> None:
        status, data = self.request_json("/api/projects/update", {"id": 1, "action": "accept"})
        self.assertEqual(status, 200)
        self.assertEqual(data["category"], "AI Agent")

        status, error = self.request_json(
            "/api/projects/update", {"id": 2, "category": "   ", "action": "manual"}
        )
        self.assertEqual(status, 400)
        self.assertIn("不能为空", error["error"])

    def test_bulk_update(self) -> None:
        status, data = self.request_json(
            "/api/projects/bulk", {"ids": [1, 2], "category": "开发工具", "action": "manual"}
        )
        self.assertEqual(status, 200)
        self.assertEqual(data["updated"], 2)
        with review_server.connect_db() as conn:
            categories = [row["category"] for row in conn.execute("SELECT category FROM projects ORDER BY id")]
        self.assertEqual(categories, ["开发工具", "开发工具"])


if __name__ == "__main__":
    unittest.main()
