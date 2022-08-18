import { Card, Col, Row } from "antd";
import React, { useState } from "react";

import genCard from "./genCard.tsx";

export default function CardMyWebsites() {
  const websites = [
    {
      "url": "https://pages.hjkl01.cn/",
      "title": "blog by docusaurus",
      "description": "我的笔记",
    },
    {
      "url": "https://hexo.hjkl01.cn/",
      "title": "blog by hexo",
      "description": "stop update",
    },
    {
      "url": "https://hugo.hjkl01.cn/",
      "title": "blog by hugo",
      "description": "stop update",
    },
    {
      "url": "https://jsonv.hjkl01.cn/editor/",
      "title": "JSON Valid",
      "description": "Json视图",
    },
    {
      "url": "https://nginx.hjkl01.cn/",
      "title": "Nginx Online",
      "description": "配置高性能、安全、稳定的NGINX服务器的最简单方法。",
    },
    {
      "url": "https://curl.hjkl01.cn/",
      "title": "curl to python",
      "description": "Convert curl commands to code",
    },
    { "url": "https://map.hjkl01.cn/", "title": "地图数据", "description": "fork" },
    {
      "url": "https://dber.hjkl01.cn/",
      "title": "Database design tool based on entity relation diagram",
      "description": "fork",
    },
    {
      "url": "https://drf.hjkl01.cn/",
      "title": "drf中文文档",
      "description": "fork",
    },
    // {'url': '', 'title':'', 'description': ''},
  ];
  return genCard(websites);
}
