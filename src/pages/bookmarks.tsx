import React, { useState } from 'react';
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Tag, Input } from 'antd';
import 'antd/dist/reset.css';

import Bookmarks from './data/bookmarks.json';
// cp ~/Library/Application\ Support/Google/Chrome/Default/Bookmarks src/pages/data/bookmarks.json


const BookmarkApp = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const renderBookmarks = (bookmarks) => {
    return bookmarks.map((bookmark) => {
      if (bookmark.type === 'url') {
        if (bookmark.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return (
            <Tag key={bookmark.id} color="blue" style={{ margin: '5px' }}>
              <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                {bookmark.name}
              </a>
            </Tag>
          );
        }
      } else if (bookmark.type === 'folder') {
        const filteredChildren = renderBookmarks(bookmark.children);
        if (filteredChildren.some(child => child !== null)) {
          return (
            <div key={bookmark.id} style={{ margin: '10px 0' }}>
              <h2>{bookmark.name}</h2>
              {filteredChildren}
            </div>
          );
        }
      }
      return null;
    });
  };

  const bookmarkBar = Bookmarks.roots.bookmark_bar.children;

  return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center" style={{ marginTop: '20px' }}>
        <Input
          type="text"
          placeholder="搜索书签..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ margin: '10px 0', padding: '5px', width: '300px' }}
        />

        <h1>书签栏</h1>
        {renderBookmarks(bookmarkBar)}
      </div>
    </div>
  );
};


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <BookmarkApp />
      </main>
    </Layout>
  );
}
