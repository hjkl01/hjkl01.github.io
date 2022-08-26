// import clsx from "clsx";
import Layout from "@theme/Layout";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import styles from "./index.module.css";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
// import App from "@site/src/components/NavpageFeatures";
// import { Redirect } from "@docusaurus/router";

import "antd/dist/antd.css";

import { Tabs } from "antd";
import React, { useState } from "react";
import { Avatar, Card, Col, Row } from "antd";

import tools from "./data/tools.json";
import github from "./data/github.json";
import websites from "./data/websites.json";
import fish from "./data/fish.json";
import office from "./data/office.json";

function GenElement(props) {
  const { Meta } = Card;

  const websites = props.websites;

  const element = websites.map((prop) => (
    <Col span={8} key={prop.url}>
      <a href={prop.url} target="_blank">
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
      </a>
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

  return (
    <div className="card-container">
      <br />
      <Tabs type="line" tabPosition="left" size="large" centered="true">
        <TabPane tab="常用工具" key="tools">
          <GenElement websites={tools} />
        </TabPane>

        <TabPane tab="Github" key="2">
          <GenElement websites={github} />
        </TabPane>

        <TabPane tab="Cloudflare" key="3">
          <GenElement websites={websites} />
        </TabPane>

        <TabPane tab="学习(摸鱼)" key="4">
          <GenElement websites={fish} />
        </TabPane>

        <TabPane tab="Office" key="5">
          <GenElement websites={office} />
        </TabPane>
      </Tabs>
    </div>
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
