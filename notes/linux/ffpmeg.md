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

## 提取音频
```shell
ffmpeg -i input.mp4 -vn -ar 44100 -ab 128k -f mp3 output.mp3
在这里：

-vn 表示不包含任何视频流（只提取音频）。
-ar 44100 设置输出音频的采样率为44.1kHz。
-ab 128k 设置音频比特率为128kbit/s。
-f mp3 指定输出格式为MP3。
```

## 合并音频到MP4


```shell
ffmpeg -i video_input.mp4 -i audio_input.mp3 -c copy -map 0:v:0 -map 1:a:0 -shortest output.mp4
在这个命令中：

-i video_input.mp4 是你的视频输入文件。
-i audio_input.mp3 是你的音频输入文件。
-c copy 指示FFmpeg复制视频和音频流而不重新编码，除非有必要。这对于快速合并特别有用，因为它可以避免编码时间。
-map 0:v:0 指示FFmpeg从第一个输入（视频输入）中选择视频流。
-map 1:a:0 指示FFmpeg从第二个输入（音频输入）中选择音频流。
-shortest 参数告诉FFmpeg输出文件的持续时间应与最短的输入流相同。如果你不想限制输出文件的长度，可以省略这个参数。
output.mp4 是最终输出的文件名。
但是，如果你发现音频和视频的同步有问题，你可能需要调整音频的延迟。你可以使用-itsoffset参数来增加或减少音频的延迟，例如：


ffmpeg -i video_input.mp4 -i audio_input.mp3 -c copy -map 0:v:0 -map 1:a:0 -itsoffset 0.5 -shortest output.mp4
这里的-itsoffset 0.5会使音频延迟半秒。如果需要提前音频，可以使用负值。
```
