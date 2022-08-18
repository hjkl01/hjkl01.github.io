import {Card, Col, Row} from 'antd';
import React, {useState} from 'react';

import genCard from './genCard.tsx';

export default function CardOffice() {

    const websites = [
            {'url': 'http://nj.hjkl01.cn:16880/', 'title':'AriaNg', 'description': 'Aria2 管理平台'}, 
            {'url': 'https://nj.hjkl01.cn:18096/', 'title':'Jellyfin', 'description': '在线观看'},
            {'url': 'https://nj.hjkl01.cn:15212/home', 'title':'Cloudreve', 'description': '云盘'},
            {'url': 'https://nj.hjkl01.cn:15244/', 'title':'Alist', 'description': '云盘'},
            {'url': 'https://nj.hjkl01.cn:13000/', 'title':'Mstream', 'description': '在线听音乐'},
            {'url': 'https://nj.hjkl01.cn:33000/', 'title':'Gitea', 'description': '代码管理及备份'},
            {'url': 'https://nj.hjkl01.cn:17400/static/#/proxies/tcp', 'title':'frp', 'description': '反向代理'},
            {'url': 'https://nj.hjkl01.cn:18001/', 'title':'Django', 'description': 'Log管理'},
            // {'url': '', 'title':'', 'description': ''},
        ]
    return genCard(websites);
}
