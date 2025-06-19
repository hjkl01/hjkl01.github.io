# Rime

## [github](https://github.com/iDvel/rime-ice)

## ~/Library/Rime/default.custom.yaml
```yaml
patch:
  # 菜单
  menu:
    page_size: 9 # 候选词个数

  # 切换中英：
  # 不同的选项表示：打字打到一半时按下了 CapsLock、Shift、Control 后：
  # commit_code  上屏原始的编码，然后切换到英文
  # commit_text  上屏拼出的词句，然后切换到英文
  # clear        清除未上屏内容，然后切换到英文
  # inline_ascii 无输入时，切换中英；有输入时，切换到临时英文模式，按回车上屏后回到中文状态
  # noop         屏蔽快捷键，不切换中英，但不要屏蔽 CapsLock
  ascii_composer:
    good_old_caps_lock: true # true | false
    switch_key:
      Caps_Lock: commit_code
      # Caps_Lock: clear # commit_code | commit_text | clear
      Shift_L: noop
      # Shift_L: clear # commit_code | commit_text | inline_ascii | clear | noop
      Shift_R: clear # commit_code | commit_text | inline_ascii | clear | noop
      Control_L: noop # commit_code | commit_text | inline_ascii | clear | noop
      Control_R: noop # commit_code | commit_text | inline_ascii | clear | noop
```

## ~/Library/Rime/rime_ice.custom.yaml
```yaml
# 添加了模糊音的自定义配置文件 rime_ice.custom.yaml
# https://github.com/Mark24Code/rime-auto-deploy/issues/1
patch:
  # 拼写设定
  speller:
    # 如果不想让什么标点直接上屏，可以加在 alphabet，或者编辑标点符号为两个及以上的映射
    alphabet: zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA
    delimiter: " '"  # 第一位<空格>是拼音之间的分隔符；第二位<'>表示可以手动输入单引号来分割拼音。
    algebra:
      []
```
