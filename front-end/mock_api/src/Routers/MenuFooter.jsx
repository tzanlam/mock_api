import { Tabs } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    key: "10",
    lable: <Link to="/">Dottie</Link>,
  },
  {
    key: "2",
    lable: <Link to="/vechungtoi">Về chúng tôi</Link>,
  },
  {
    key: "3",
    lable: <Link to="/nhuongquyen">Nhượng quyền</Link>,
  },
  {
    key: "4",
    lable: <Link to="/tuyendung">Tuyển dụng</Link>,
  },
  {
    key: "5",
    lable: <Link to="/huongdanmuahang">Hướng dẫn mua hàng</Link>,
  },
  {
    key: "6",
    lable: <Link to="/chinhsachthanhvien">Chính sách thành viên</Link>,
  },
  {
    key: "7",
    lable: <Link to="/chinhsachbaomat">Chính sách bảo mật</Link>,
  },
  {
    key: "8",
    lable: <Link to="/chinhsachthanhtoan">Chính sách thanh toán</Link>,
  },
  {
    key: "9",
    lable: (
      <Link to="/chinhsachdoivabaohanhsanpham">
        Chính sách đổi và bảo hành sản phẩm
      </Link>
    ),
  },
  {
    key: "10",
    lable: (
      <Link to="/chinhsachbaovethongtinnguoidung">
        Chính sách bảo vệ thông tin người dùng
      </Link>
    ),
  },
];

const MenuFooter = () => (
  <Tabs defaultActiveKey="1">
    {items.map((item) => (
      <Tabs.TabPane tab={item.lable} key={item.key} />
    ))}
  </Tabs>
);
export default MenuFooter;
