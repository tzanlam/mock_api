import React from "react";
import { Tabs } from "antd";
import { Link } from "react-router-dom";

const TabPaneComponent = ({ items }) => (
  <Tabs defaultActiveKey="1">
    {items.map((item) => (
      <Tabs.TabPane tab={<Link to={item.path}>{item.label}</Link>} key={item.key} />
    ))}
  </Tabs>
);

export default TabPaneComponent;
