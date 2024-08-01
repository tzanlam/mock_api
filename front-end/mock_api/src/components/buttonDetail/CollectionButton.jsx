import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items = [
  {
    label: "Tat ca san pham",
    key: "1",
  },
  {
    label: "DEAL TU 79K",
    key: "2",
  },
  {
    label: "DEAL TU 99K",
    key: "3",
  },
  {
    label: "DEAL TU 119K",
    key: "4",
  },
  {
    label: "DEAL TU 199K",
    key: "5",
  },
];
const CollectionButton = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
    className="text-gray-950 text-3xl font-semibold "
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        COLLECTIONS
        <DownOutlined className="text-xl" />
      </Space>
    </a>
  </Dropdown>
);
export default CollectionButton;
