# Makefile

```makefile
# Makefile for FastAPI Backend

# Variables
PYTHON := .venv/bin/python3
PIP := .venv/bin/pip
UV := .venv/bin/uv
UVICORN := .venv/bin/uvicorn
APP := main:app
HOST := 0.0.0.0
PORT := 8080

# Default target
.PHONY: help
help:
	@echo "FastAPI Backend Makefile"
	@echo "============================"
	@echo "Available targets:"
	@echo "  install     - Install dependencies"
	@echo "  start       - Start the development server"
	@echo "  format      - Format code with black"
	@echo "  help        - Show this help message"

# Install dependencies
.PHONY: install
install:
	@if [ ! -d ".venv" ]; then \
		echo "Creating virtual environment..."; \
		python3.12 -m venv .venv; \
		echo "Virtual environment created in .venv"; \
	else \
		echo "Virtual environment already exists."; \
	fi
	$(PIP) install -U pip uv
	@source .venv/bin/activate && $(UV) pip install -r requirements.txt

# dev the development server
.PHONY: dev
dev:
	@echo "Starting FastAPI Backend..."
	@echo "Access the application at http://localhost:$(PORT)"
	@echo "API documentation: http://localhost:$(PORT)/docs"
	@echo "Press Ctrl+C to stop the server"
	env OLLAMA_API_URL=http://localhost:11434 OLLAMA_MODEL=qwen3:14b $(UVICORN) $(APP) --host $(HOST) --port $(PORT) --reload

# Start the development server
.PHONY: start
start:
	@echo "Starting FastAPI Backend..."
	@echo "Access the application at http://localhost:$(PORT)"
	@echo "API documentation: http://localhost:$(PORT)/docs"
	@echo "Press Ctrl+C to stop the server"
	env OLLAMA_API_URL=http://localhost:11434 OLLAMA_MODEL=qwen3:14b $(UVICORN) $(APP) --host $(HOST) --port $(PORT)

# Run linting (if linting tools are installed)
.PHONY: lint
lint:
	@source .venv/bin/activate && flake8 --max-line-length 120 --exclude .venv

# Run formatting (if formatting tools are installed)
.PHONY: format
format:
	@source .venv/bin/activate && black -l 120 .
```
