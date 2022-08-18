import { Card, Col, Row } from "antd";
import React, { useState } from "react";

import genCard from "./genCard.tsx";

export default function CardFish() {
  const websites = [
    {
      "url": "https://github.com/explore",
      "title": "github explore",
      "description": "",
    },
    {
      "url": "https://dig.chouti.com/",
      "title": "抽屉新热榜",
      "description": "抽屉新热榜-聚合每日热门、搞笑、有趣资讯",
    },
    {
      "url": "https://www.v2ex.com/",
      "title": "V2EX = way to explore",
      "description": "V2EX 是一个关于分享和探索的地方",
    },
    {
      "url": "https://web.telegram.org/z/",
      "title": "telegram",
      "description": "电报",
    },
    {
      "url": "https://twitter.com/explore",
      "title": "twitter explore",
      "description": "twitter",
    },
    {
      "url": "https://www.right.com.cn/forum/",
      "title": "恩山论坛",
      "description": "搞基",
    },
    { "url": "https://tophub.today/", "title": "热榜", "description": "News" },

    {
      "url": "https://jubt.fun/cn/index.html",
      "title": "聚BT",
      "description": "聚合搜索",
    },
    { "url": "https://www.dygod.net/", "title": "电影天堂", "description": "非4K" },
    { "url": "https://www.dydytt.net/", "title": "电影天堂", "description": "非4K" },
    // {'url': '', 'title':'', 'description': ''},
  ];
  return genCard(websites);
}
