import React, { useState, useEffect } from 'react';
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// import json_fish from './data/fish.json';
// import json_tools from './data/tools.json';
// import json_movies from './data/movies.json';
import json_data from './data/data.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 合并JSON文件的数据
    // const combinedData = [...json_tools, ...json_fish, ...json_movies];
    const combinedData = [...json_data];
    const itemsWithDefaultImage = combinedData.map(item => ({
      ...item,
      img: item.img || 'https://github.githubassets.com/apple-touch-icon-144x144.png' // 默认图像URL
    }));
    setItems(itemsWithDefaultImage);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const highlightText = (text: string) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, index) => (
      <span key={index} className={regex.test(part) ? 'bg-blue-200' : ''}>
        {part}
      </span>
    ));
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-2xl mt-5 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors no-underline text-gray-700"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-8 h-8 rounded-full mr-3" 
              />
              <span>{highlightText(item.title)}</span>
            </a>
          ))}
        </div>
      </div>
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