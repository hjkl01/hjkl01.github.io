import React, { useState, useEffect } from 'react';
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import "antd/dist/reset.css";
import { Watermark, Input, Tag, Typography } from "antd";

import json_fish from './data/fish.json';
import json_tools from './data/tools.json';
import json_movies from './data/movies.json';

const { Text } = Typography;

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 合并两个JSON文件的数据
    const combinedData = [...json_tools, ...json_fish, ...json_movies];
    const itemsWithDefaultImage = combinedData.map(item => ({
      ...item,
      img: item.img || 'https://github.githubassets.com/apple-touch-icon-144x144.png' // 默认图像URL
    }));
    setItems(itemsWithDefaultImage);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const highlightText = (text) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, index) => (
      <span key={index} style={{ backgroundColor: regex.test(part) ? '#d1ecf1' : 'transparent' }}>
        {part}
      </span>
    ));
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Watermark content="hjkl01">
      <div className="container mt-5">
        <div className="d-flex justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: '50%', marginTop: '20px', height: '40px' }}
          />
        </div>
        <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            {filteredItems.map((item, index) => (
              <Tag key={index} style={{ margin: '15px', width: '30%', display: 'flex', alignItems: 'center', height: '40px' }}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} style={{ marginRight: '10px', width: '20px' }} />
                  <Text>{highlightText(item.title)}</Text>
                </a>
              </Tag>
            ))}
          </div>
        </div>
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
