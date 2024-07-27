import { Tabs } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <Link to="/">Home</Link>,
  },
  {
    key: "2",
    label: <Link to="/newProduct">Hàng mới</Link>,
  },
  {
    key: "3",
    label: <Link to="/product">Sản phẩm</Link>,
  },
  {
    key: "4",
    label: <Link to="/bestSallers">Best sallers</Link>,
  },
  {
    key: "5",
    label: <Link to="/hotRestock">Hot Restock</Link>,
  },
  {
    key: "6",
    label: <Link to="/collections">Collections</Link>,
  },
  {
    key: "7",
    label: <Link to="/sales">Ưu đãi 79k</Link>,
  },
  {
    key: "8",
    label: <Link to="/stores">Cửa hàng</Link>,
  },
];

const Menu = () => (
  <Tabs defaultActiveKey="1">
    {items.map((item) => (
      <Tabs.TabPane tab={item.label} key={item.key} />
    ))}
  </Tabs>
);

export default Menu;
