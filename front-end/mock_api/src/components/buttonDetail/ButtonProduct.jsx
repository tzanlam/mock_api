import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items = [
  {
    label: "Ao",
    key: "1",
  },
  {
    label: "Quan chan vay",
    key: "2",
  },
  {
    label: "Dam",
    key: "3",
  },
];
const ButtonProduct = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
    className="text-gray-950 text-3xl font-semibold "
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        SẢN PHẨM
        <DownOutlined className="text-xl" />
      </Space>
    </a>
  </Dropdown>
);
export default ButtonProduct;
