# nuitka

## usecase

```shell
# 依赖包 patchelf

# hello.bin
python -m nuitka --standalone --onefile hello.py

# hello.so
python -m nuitka --module hello.py
```
