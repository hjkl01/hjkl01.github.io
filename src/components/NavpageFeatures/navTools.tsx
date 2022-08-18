import {Card, Col, Row} from 'antd';
import React, {useState} from 'react';

import genCard from './genCard.tsx';

export default function Cardtools() {

    const websites = [
            {'url': 'https://www.google.com/', 'title':'Google ', 'description': 'Google 搜索  手气不错'},
            {'url': 'https://www.github.com/', 'title':'Github', 'description': 'Where the world builds software · GitHub'},
            {'url': 'https://dig.chouti.com/', 'title':'抽屉新热榜', 'description': '抽屉新热榜-聚合每日热门、搞笑、有趣资讯'},
            {'url': 'https://fanyi.youdao.com/', 'title':'在线翻译_有道', 'description': '免费、即时的多语种在线翻译'},
        ]
    return genCard(websites);
}
