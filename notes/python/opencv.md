# opencv

## 替换视频背景

```python
import os
import sys
from datetime import datetime
from itertools import cycle, islice

import cv2
import numpy as np


def addimage(origin_pic, background_pic):
    # 照片读取
    # img1 = cv2.imread("./1-0002.png")
    img1 = cv2.imread(origin_pic)
    print(origin_pic, img1.shape)
    height, width, channels = img1.shape

    img2 = cv2.imread(background_pic)
    img2 = cv2.resize(img2, dsize=(width, height))
    # 建立窗口
    cv2.namedWindow("task")

    # 设置颜色提取阈值，绿色
    color_dist = {'green': {'Lower': np.array([26, 104, 85]), 'Upper': np.array([100, 255, 255])}}

    # 将RGB图片转换为HSV图像
    hsv = cv2.cvtColor(img1, cv2.COLOR_RGB2HSV)
    background_mask = cv2.inRange(hsv, color_dist['green']['Lower'], color_dist['green']['Upper'])

    person_mask = ~background_mask

    # 将人像进行mask处理，得到需要添加的背景
    scenic_img = cv2.bitwise_and(img2, img2, mask=background_mask)

    # mask只有0和1，得到去除绿色背景后的人像
    person_img = cv2.bitwise_and(img1, img1, mask=person_mask)

    # result = cv2.add(scenic_img, person_img)

    # 通过调节alpha实现背景透明度的调节
    alpha_img = cv2.addWeighted(scenic_img, 0.7, person_img, 1, 0)

    # cv2.imshow('lena', alpha_img)
    res_file = f'result/{origin_pic.split("/")[-1]}'
    print(res_file)
    if not os.path.exists('result'):
        os.system('mkdir result')
    cv2.imwrite(res_file, alpha_img)


def pre_run():
    temp_dirs = ['pictures', 'background', 'result']
    for td in temp_dirs:
        if os.path.exists(td):
            cmd = f'rm -rf {td}/*.png'
        else:
            cmd = f'mkdir {td}'
        os.system(cmd)


def main(origin_mp4, background_mp4):
    now = datetime.now().strftime("%Y%m%d-%H%M%S")
    print(now)
    # now = '20240907-134406'

    pre_run()
    cmds = [f'ffmpeg -i {origin_mp4} pictures/op_%04d.png',
            f'ffmpeg -i {origin_mp4} -vn -ar 44100 -ab 128k -f mp3 output_{now}.mp3 -y',
            # f'ffmpeg -i {origin_mp4} -f mp3 -vn temp.mp3',
            f'ffmpeg -i {background_mp4} background/op_%04d.png',
            ]
    for cmd in cmds:
        os.system(cmd)

    origin_pics = os.listdir('pictures')
    origin_pics.sort()
    background_pics = os.listdir('background')
    background_pics.sort()

    bg_extended = list(islice(cycle(background_pics), len(origin_pics)))
    # print('bg_extended: ', bg_extended)

    for i in range(len(origin_pics)):
        addimage(f'pictures/{origin_pics[i]}', f'background/{bg_extended[i]}')

    cmds = [f'ffmpeg -framerate 30 -i result/op_%04d.png -c:v libx264 -r 30 temp_{now}.mp4 -y',
            f'ffmpeg -i ./temp_{now}.mp4 -i ./output_{now}.mp3 -c copy -map 0:v:0 -map 1:a:0 -shortest output_{now}.mp4 -y']

    for cmd in cmds:
        os.system(cmd)


if __name__ == "__main__":
    args = sys.argv[:]
    main(args[1], args[2])
```
