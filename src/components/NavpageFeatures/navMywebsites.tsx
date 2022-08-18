import {Card, Col, Row} from 'antd';
import React, {useState} from 'react';

export default function CardMyWebsites() {
	const {Meta} = Card;

	return (
		<div className='site-card-wrapper'>

			<Row gutter={16}>

				<Col span={8}>
                    <a href="https://pages.hjkl01.cn/" target="_blank" >
                        <Card>
				            <Meta title='blog by docusaurus' description='我的笔记' />
                        </Card>
                    </a>
				</Col>

				<Col span={8}>
                    <a href="https://hexo.hjkl01.cn/" target="_blank" >
                        <Card>
				            <Meta title='blog by hexo' description='stop update' />
                        </Card>
                    </a>
				</Col>

				<Col span={8}>
                    <a href="https://hugo.hjkl01.cn/" target="_blank" >
                        <Card>
				            <Meta title='blog by hugo' description='stop update' />
                        </Card>
                    </a>
				</Col>

				<Col span={8}>
                    <a href="https://jsonv.hjkl01.cn/editor/" target="_blank" >
                        <Card>
				            <Meta title='JSON Valid' description='Json视图' />
                        </Card>
                    </a>
				</Col>

				<Col span={8}>
                    <a href="https://nginx.hjkl01.cn/" target="_blank" >
                        <Card>
				            <Meta title='Nginx Online' description='配置高性能、安全、稳定的NGINX服务器的最简单方法。' />
                        </Card>
                    </a>
				</Col>

				<Col span={8}>
                    <a href="https://curl.hjkl01.cn/" target="_blank" >
                        <Card>
				            <Meta title='curl to python' description='Convert curl commands to code' />
                        </Card>
                    </a>
				</Col>

				<Col span={8}>
                    <a href="https://map.hjkl01.cn/" target="_blank" >
                        <Card>
				            <Meta title='地图数据' description='fork' />
                        </Card>
                    </a>
				</Col>

				<Col span={8}>
                    <a href="https://dber.hjkl01.cn/" target="_blank" >
                        <Card>
				            <Meta title='Database design tool based on entity relation diagram' description='fork' />
                        </Card>
                    </a>
				</Col>

				<Col span={8}>
                    <a href="https://drf.hjkl01.cn/" target="_blank" >
                        <Card>
				            <Meta title='drf中文文档' description='fork' />
                        </Card>
                    </a>
				</Col>

			</Row>

		</div>
	);
}

