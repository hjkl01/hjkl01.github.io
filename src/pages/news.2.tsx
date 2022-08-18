import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import "./index.module.css";

import React, { useEffect, useState } from "react";

// const fakeDataUrl = 'https://randomuser.me/api/?results=30&inc=name,gender,email,nat,picture&noinfo';
const fakeDataUrl = "https://news.hjkl01.cn/api/news/reload/";
const ContainerHeight = 1000;

const ForeverList: React.FC = () => {
  const [data, setData] = useState<UserItem[]>([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then(async (res) => res.json())
      .then((body) => {
        setData(data.concat(body));
        message.success(`${body.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
        ContainerHeight
    ) {
      appendData();
    }
  };

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <List
        grid={{ gutter: 30, column: 10 }}
        size="large"
      >
        <VirtualList
          data={data}
          height={ContainerHeight}
          itemHeight={100}
          itemKey="email"
          onScroll={onScroll}
        >
          {(item: UserItem) => (
            <List.Item extra={<Avatar src={item.website} />}>
              <List.Item.Meta
                avatar={<Avatar src={item.img_url} />}
                title={<a href={item.url}>{item.title}</a>}
                description={item.website}
              />
              <div>{item.hot_score}</div>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </div>
  );
};

export default function App(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <ForeverList />
    </Layout>
  );
}
