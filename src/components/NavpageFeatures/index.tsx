import 'antd/dist/antd.css';

import { Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';

import CardTools from './navTools.tsx';
import CardMyWebsites from './navMywebsites.tsx';

const { TabPane } = Tabs;


const App: React.FC = () => (
  <div className="card-container">
    <br/>
    <Tabs type="line" tabPosition="left" size="large" centered="true" >
      <TabPane tab="常用工具" key="1">
            <CardTools/>
      </TabPane>
      <TabPane tab="Github" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="我的备份" key="3">
        <CardMyWebsites />
      </TabPane>
    </Tabs>
  </div>
);

export default App;
