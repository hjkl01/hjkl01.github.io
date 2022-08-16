import {Card, Col, Row} from 'antd';
import React, {useState} from 'react';

export default function Cardtools() {
	const {Meta} = Card;

	return (
		<div className='site-card-wrapper'>

			<Row gutter={16}>
				<Col span={8}>
                    <a href="https://www.google.com/" target="_blank" >
                        <Card>
				            <Meta title='Google' description='Google 搜索  手气不错' />
                        </Card>
                    </a>
				</Col>

				<Col span={8}>
                    <a href="https://www.github.com/" target="_blank" >
                        <Card>
				            <Meta title='Github' description='Where the world builds software · GitHub' />
                        </Card>
                    </a>
				</Col>

				<Col span={8}>
                    <a href="https://dig.chouti.com/" target="_blank" >
                        <Card>
				            <Meta title='抽屉新热榜' description='抽屉新热榜-聚合每日热门、搞笑、有趣资讯' />
                        </Card>
                    </a>
				</Col>

			</Row>

		</div>
	);
}
				// <Col span={5}>
				// 	<Card title='Card title'
				// 		style={{width: 300}}
				// 		cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
				// 	>
				// 		<Meta title='Europe Street beat' description='www.instagram.com' />
				// 	</Card>
				// </Col>
