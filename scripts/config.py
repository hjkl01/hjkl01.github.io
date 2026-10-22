import os

from loguru import logger
from dotenv import load_dotenv

BASE_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))

log_file_path = os.path.join(BASE_DIR, "logs/stdout.log")
err_log_file_path = os.path.join(BASE_DIR, "logs/error.log")

logger.add(
    log_file_path,
    format="{process} {thread} {time:YYYY.MM.DD HH.mm.ss} {level}.{file}.{name}.{module}.{line} {message}",
    rotation="100 MB",
    colorize=True,
    enqueue=True,
    backtrace=True,
    diagnose=True,
    level="INFO",
)
logger.add(
    err_log_file_path,
    format="{time:YYYY.MM.DD HH.mm.ss} {level}.{file}.{name}.{module}.{line} {message}",
    rotation="100 MB",
    level="ERROR",
    colorize=True,
    enqueue=True,
    backtrace=True,
    diagnose=True,
)

load_dotenv()

QWEN_KEY = os.getenv("QWEN_KEY")


def _normalize_github_token(value: str | None) -> str:
    """去除首尾空白/换行（非法字符会让 httpx/h11 抛 LocalProtocolError）；
    .env.example 里的占位值视为未配置，回退到匿名请求（GitHub 限制 60 次/小时）。"""
    value = (value or "").strip()
    if value in {"", "your_github_token_here"}:
        return ""
    return value


GITHUB_TOKEN = _normalize_github_token(os.getenv("GITHUB_TOKEN", ""))


def reload_github_token() -> str:
    """重新读取 .env / 环境变量中的 GITHUB_TOKEN，供长驻服务热更新。"""
    global GITHUB_TOKEN
    load_dotenv(override=True)
    GITHUB_TOKEN = _normalize_github_token(os.getenv("GITHUB_TOKEN", ""))
    return GITHUB_TOKEN


OPENAI_API = os.getenv("OPENAI_API", "")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "")
API_CONCURRENCY = int(os.getenv("API_CONCURRENCY", "3"))
LLM_MAX_ATTEMPTS = int(os.getenv("LLM_MAX_ATTEMPTS", "3"))
