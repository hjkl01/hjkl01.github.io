import React, { useState } from 'react';
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Bookmarks from './data/bookmarks.json';
// cp ~/Library/Application\ Support/Google/Chrome/Default/Bookmarks src/pages/data/bookmarks.json


const BookmarkApp = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const renderBookmarks = (bookmarks) => {
    return bookmarks.map((bookmark) => {
      if (bookmark.type === 'url') {
        if (bookmark.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return (
            <a 
              key={bookmark.id} 
              href={bookmark.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm m-1 hover:bg-blue-600 transition-colors"
            >
              {bookmark.name}
            </a>
          );
        }
      } else if (bookmark.type === 'folder') {
        const filteredChildren = renderBookmarks(bookmark.children);
        if (filteredChildren.some(child => child !== null)) {
          return (
            <div key={bookmark.id} className="my-4">
              <h2 className="text-xl font-bold mb-2">{bookmark.name}</h2>
              <div className="flex flex-wrap">{filteredChildren}</div>
            </div>
          );
        }
      }
      return null;
    });
  };

  const bookmarkBar = Bookmarks.roots.bookmark_bar.children;

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex flex-col items-center my-5">
        <input
          type="text"
          placeholder="搜索书签..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <h1 className="text-2xl font-bold mb-4">书签栏</h1>
        <div className="w-full">{renderBookmarks(bookmarkBar)}</div>
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