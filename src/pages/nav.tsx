import React, { useState } from "react";

// import clsx from "clsx";
import Layout from "@theme/Layout";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import styles from "./index.module.css";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
// import App from "@site/src/components/NavpageFeatures";
// import { Redirect } from "@docusaurus/router";

import "antd/dist/reset.css";
import { Tabs, message, Watermark, ConfigProvider } from "antd";
import { Avatar, Card, Col, Row } from "antd";

function GenElement(props) {
  const { Meta } = Card;

  const websites = props.websites;

  const element = websites.map((prop) => (
    <Col span={8} key={prop.url}>
      <a href={prop.url} target="_blank">
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: "#e4e8eb",
            },
          }}
        >
          <Card
            hoverable
            bordered
            // style={{ width: "80%" }}
            style={{ marginTop: 16 }}
          // extra={<Avatar src={prop.img} />}
          >
            <Meta
              avatar={<Avatar src={prop.img} />}
              title={prop.title}
              description={prop.description}
            />
          </Card>
        </ConfigProvider>
      </a>
      <br />
    </Col>
  ));

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>{element}</Row>
      <br />
    </div>
  );
}

function App() {
  const { TabPane } = Tabs;

  const [messageApi, contextHolder] = message.useMessage();
  const onChange = (key: string) => {
    // console.log(key);
    messageApi.info(key);
  };

  return (
    <Watermark content="hjkl01">
      <div className="card-container">
        <br />
        {contextHolder}
        <Tabs
          type="card"
          tabPosition="left"
          size="large"
          tabBarGutter={15}
          onChange={onChange}
        >
          <TabPane tab="tools" key="开发常用工具">
            <GenElement websites={require("./data/tools.json")} />
          </TabPane>

          <TabPane tab="office" key="办公室用到的服务">
            <GenElement websites={require("./data/office.json")} />
          </TabPane>

          <TabPane tab="Learn(Fish)" key="我没有摸鱼 我是在学习">
            <GenElement websites={require("./data/fish.json")} />
          </TabPane>

          <TabPane tab="Funny" key="电影相关">
            <GenElement websites={require("./data/movies.json")} />
          </TabPane>
        </Tabs>
      </div>
    </Watermark>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <App />
      </main>
    </Layout>
  );
}
