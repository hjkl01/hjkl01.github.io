import React from 'react';
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Tag } from 'antd';
import 'antd/dist/reset.css';

import Bookmarks from './data/bookmarks.json';


const BookmarkApp = () => {
  const renderBookmarks = (bookmarks) => {
    return bookmarks.map((bookmark) => {
      if (bookmark.type === 'url') {
        return (
          <Tag key={bookmark.id} color="blue" style={{ margin: '5px' }}>
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.name}
            </a>
          </Tag>
        );
      } else if (bookmark.type === 'folder') {
        return (
          <div key={bookmark.id} style={{ margin: '10px 0' }}>
            <h2>{bookmark.name}</h2>
            {renderBookmarks(bookmark.children)}
          </div>
        );
      }
      return null;
    });
  };

  const bookmarkBar = Bookmarks.roots.bookmark_bar.children;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
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
