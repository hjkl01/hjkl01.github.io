# loguru

```python
# log.py
import sys
from pathlib import Path
from loguru import logger

# 日志目录
LOG_DIR = Path("logs")
LOG_DIR.mkdir(exist_ok=True)

# 移除默认的 stderr 输出（避免重复）
logger.remove()

# 控制台输出（带颜色）
logger.add(
    sys.stdout,
    level="DEBUG",
    format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | "
    "<level>{level: <8}</level> | "
    "<cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - "
    "<level>{message}</level>",
    colorize=True,
)

# 文件输出 - 按天轮转，保留7天，INFO级别以上
logger.add(
    LOG_DIR / "app_{time:YYYY-MM-DD}.log",
    rotation="1 day",
    retention="7 days",
    level="INFO",
    format="{time:YYYY-MM-DD HH:mm:ss} | {level: <8} | {name}:{function}:{line} - {message}",
    encoding="utf-8",
)

# 错误日志单独记录（ERROR 及以上）
logger.add(
    LOG_DIR / "error_{time:YYYY-MM-DD}.log",
    rotation="1 day",
    retention="14 days",
    level="ERROR",
    format="{time:YYYY-MM-DD HH:mm:ss} | {level: <8} | {name}:{function}:{line} - {message}",
    encoding="utf-8",
)

# 可选：输出 JSON 格式日志（便于 ELK 等收集）
# logger.add(
#     LOG_DIR / "app_json.log",
#     format="{message}",
#     serialize=True,  # 输出 JSON
#     level="INFO",
# )

# 导出 logger 实例供其模块使用
__all__ = ["logger"]
```
