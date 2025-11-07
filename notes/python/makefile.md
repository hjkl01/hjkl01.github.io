# Makefile

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

.PHONY: help install run dev test clean db-upgrade

# 显示帮助信息
help:
	@echo "FastAPI JWT Authentication System"
	@echo ""
	@echo "可用命令："
	@echo "  install    - 安装项目依赖"
	@echo "  run        - 运行生产服务器"
	@echo "  dev        - 运行开发服务器（自动重载）"
	@echo "  test       - 运行测试"
	@echo "  clean      - 清理临时文件"
	@echo "  help       - 显示此帮助信息"

# 安装依赖
install:
	@if [ ! -d ".venv" ]; then \
		@echo "📦 创建虚拟环境..."; \
		$(PYTHON) -m venv $(VENV); \
	else \
		echo "Virtual environment already exists."; \
	fi
	@echo "📦 安装依赖..."
	$(ACTIVATE) && pip install -U pip uv -i https://mirrors.cernet.edu.cn/pypi/web/simple
	$(ACTIVATE) && uv pip install -r requirements.txt -i https://mirrors.cernet.edu.cn/pypi/web/simple
	$(ACTIVATE) && $(VENV)/bin/pre-commit install
	@echo "✅ 依赖安装完成"

# 运行生产服务器
run:
	@echo "Starting production server on $(SERVER_HOST):$(SERVER_PORT)"
	uvicorn main:app --host $(SERVER_HOST) --port $(SERVER_PORT)

# 运行开发服务器
dev:
	@echo "Starting development server on $(SERVER_HOST):$(SERVER_PORT)"
	uvicorn main:app --host $(SERVER_HOST) --port $(SERVER_PORT) --reload

# 运行测试
test:
	$(PYTHON) -m pytest tests/ -v

# 清理临时文件
clean:
	rm -rf __pycache__/
	rm -rf */__pycache__/
	rm -rf */*/__pycache__/
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete

```
