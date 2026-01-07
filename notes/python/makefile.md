# Makefile

### example
```makefile
# 从环境变量或 .env 文件加载配置，但允许命令行覆盖
ENV_FILE ?= .env

# 尝试导入环境变量，但让命令行参数有更高优先级
-include $(ENV_FILE)

# 如果变量未设置，则使用默认值（这将在命令行/环境变量之后执行）
ifndef SERVER_HOST
SERVER_HOST := 127.0.0.1
endif

ifndef SERVER_PORT
SERVER_PORT := 8080
endif

export

PYTHON ?= python3
VENV ?= .venv
ACTIVATE ?= source $(VENV)/bin/activate

.PHONY: help install run dev test test-cov clean lint format check db-init db-clean venv freeze upgrade

# 显示帮助信息
help:
	@echo "FastAPI JWT Authentication System"
	@echo ""
	@echo "可用命令："
	@echo "  install    - 安装项目依赖"
	@echo "  venv       - 创建虚拟环境"
	@echo "  run        - 运行生产服务器"
	@echo "  dev        - 运行开发服务器（自动重载）"
	@echo "  test       - 运行测试"
	@echo "  test-cov   - 运行测试并生成覆盖率报告"
	@echo "  lint       - 运行代码检查（Ruff）"
	@echo "  format     - 格式化代码（Ruff）"
	@echo "  check      - 运行所有检查（lint + test）"
	@echo "  clean      - 清理临时文件"
	@echo "  db-init    - 初始化数据库"
	@echo "  db-clean   - 清理数据库文件"
	@echo "  freeze     - 导出当前依赖到 requirements.txt"
	@echo "  upgrade    - 升级所有依赖包"
	@echo "  help       - 显示此帮助信息"

# 创建虚拟环境
venv:
	@if [ ! -d "$(VENV)" ]; then \
		echo "📦 创建虚拟环境..."; \
		$(PYTHON) -m venv $(VENV); \
		echo "✅ 虚拟环境创建完成"; \
	else \
		echo "✅ 虚拟环境已存在"; \
	fi

# 安装依赖
install: venv
	@echo "📦 升级 pip 和 uv..."
	$(ACTIVATE) && pip install -U pip uv -i https://mirrors.cernet.edu.cn/pypi/web/simple
	@echo "📦 安装项目依赖..."
	$(ACTIVATE) && uv pip install -r requirements.txt -i https://mirrors.cernet.edu.cn/pypi/web/simple
	@echo "📦 安装 pre-commit hooks..."
	$(ACTIVATE) && $(VENV)/bin/pre-commit install
	@echo "✅ 依赖安装完成"

# 运行生产服务器
run:
	@echo "🚀 启动生产服务器 $(SERVER_HOST):$(SERVER_PORT)"
	$(ACTIVATE) && uvicorn main:app --host $(SERVER_HOST) --port $(SERVER_PORT)

# 运行开发服务器
dev:
	@echo "🚀 启动开发服务器 $(SERVER_HOST):$(SERVER_PORT)（自动重载）"
	$(ACTIVATE) && uvicorn main:app --host $(SERVER_HOST) --port $(SERVER_PORT) --reload

# 运行测试
test:
	@echo "🧪 运行测试..."
	$(ACTIVATE) && $(PYTHON) -m pytest tests/ -v

# 运行测试并生成覆盖率报告
test-cov:
	@echo "🧪 运行测试并生成覆盖率报告..."
	$(ACTIVATE) && $(PYTHON) -m pytest tests/ -v --cov=. --cov-report=html --cov-report=term

# 代码检查
lint:
	@echo "🔍 运行代码检查..."
	$(ACTIVATE) && $(PYTHON) -m ruff check .

# 格式化代码
format:
	@echo "✨ 格式化代码..."
	$(ACTIVATE) && $(PYTHON) -m ruff check --fix .
	$(ACTIVATE) && $(PYTHON) -m ruff format .

# 运行所有检查
check: lint test
	@echo "✅ 所有检查通过"

# 初始化数据库
db-init:
	@echo "🗄️ 初始化数据库..."
	$(ACTIVATE) && $(PYTHON) -c "from models.database import create_tables; create_tables()"
	@echo "✅ 数据库初始化完成"

# 清理数据库
db-clean:
	@echo "🗑️ 清理数据库..."
	rm -f fastapi-jwt-auth.db
	@echo "✅ 数据库已清理"

# 导出依赖
freeze:
	@echo "📋 导出当前依赖..."
	$(ACTIVATE) && pip freeze > requirements.txt
	@echo "✅ 依赖已导出到 requirements.txt"

# 升级依赖
upgrade:
	@echo "⬆️ 升级所有依赖包..."
	$(ACTIVATE) && pip install -U pip uv -i https://mirrors.cernet.edu.cn/pypi/web/simple
	$(ACTIVATE) && uv pip install -U -r requirements.txt -i https://mirrors.cernet.edu.cn/pypi/web/simple
	@echo "✅ 依赖升级完成"

# 清理临时文件
clean:
	@echo "🧹 清理临时文件..."
	rm -rf __pycache__/
	rm -rf */__pycache__/
	rm -rf */*/__pycache__/
	rm -rf .pytest_cache/
	rm -rf .ruff_cache/
	rm -rf htmlcov/
	rm -rf .coverage
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete
	@echo "✅ 清理完成"

```


### .pre-commit-config.yaml
```yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    # 使用与你项目中 ruff 版本一致的 rev（可选，但推荐）
    rev: v0.14.10 # 👈 请根据 https://github.com/astral-sh/ruff-pre-commit/releases 最新版本调整
    hooks:
      - id: ruff
        args: [--ignore, "E501", "--fix"]
      - id: ruff-format
        args: [--line-length, "120"]
```
