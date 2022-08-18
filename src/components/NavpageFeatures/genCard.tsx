import { Card, Col, Row } from "antd";
import React, { useState } from "react";

export default function genCard(websites) {
  const { Meta } = Card;

  const element = websites.map((props) => (
    <Col span={8}>
      <a href={props.url} target="_blank">
        <Card
          hoverable
          cover={<img alt="" src={props.img} />}
        >
          <Meta title={props.title} description={props.description} />
        </Card>
      </a>
    </Col>
  ));

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {element}
      </Row>
    </div>
  );
}
