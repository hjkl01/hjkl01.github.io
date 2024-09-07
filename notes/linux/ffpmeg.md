# ffmpeg

## 视频转图片
```shell
current_time=$(date "+%Y-%m-%d %H:%M:%S")
echo $current_time
ffmpeg -i some.mp4 -t 1 -s 640x360 -r 15 pic/op_%04d.jpg

-t 需要转换的视频时长
-s 设置目标图片的分辨率
-r 帧率，每秒产生图片的数量
op_%04d.jpg 生成图片文件的名称
```

## 图片转视频
```shell
ffmpeg -f image2 -i pic/op_%04d.jpg -r 25 output_$current_time.mp4

-f 源图片的格式，image2不是image
-i 输入文件序列
op_%04d.jpg 源图片的名称
-r 目标视频的帧率
```

## 截图
```shell
ffmpeg -i some.mp4 -y -f image2 -ss 00:00:03 -vframes 1 -s 640x360 1.jpg

-y 强制覆盖已有文件
-f 指定图片格式
-ss 开始截图时刻
-vframes 截图图片数量 1：一张图（40ms）
-s 指定图片分辨率
```

## 生成gif动图
```shell
ffmpeg -i some.mp4 -t 5 -r 3 image1.gif

-t 5 共截图5s
-r 3 每秒3fps
image1.gif 动图名称
```
