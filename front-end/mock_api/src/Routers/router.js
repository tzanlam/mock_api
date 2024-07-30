import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import MainPage from "../pages/MainPage";
import NewProduct from "../pages/NewProduct";
import Product from "../pages/Product";
import BestSallers from "../pages/Product";
import HotRestock from "../pages/HotRestock";
import Collections from "../pages/Collections";
import Sales from "../pages/Sales";
import Stores from "../pages/Stores";
import VeChungToi from "../pages/Footer/VeChungToi";
import NhuongQuyen from "../pages/Footer/NhuongQuyen";
import TuyenDung from "../pages/Footer/TuyenDung"; 
import HuongDanMuaHang from "../pages/Footer/HuongDanMuaHang";
import ChinhSachThanhVien from "../pages/Footer/ChinhSachThanhVien";
import ChinhSachBaoMat from "../pages/Footer/ChinhSachBaoMat"; 
import ChinhSachThanhToan from "../pages/Footer/ChinhSachThanhToan"; 
import ChinhSachDoiVaBaoHanhSanPham from "../pages/Footer/ChinhSachDoiVaBaoHanhSanPham"; 
import ChinhSachBaoVeThongTinNguoiDung from "../pages/Footer/ChinhSachBaoVeThongTinNguoiDung"; 
import React from "react";
import { footerItems, menuItems } from "./DataMenu";

const componentMap = {
  "/": MainPage,
  "/newProduct": NewProduct,
  "/product": Product,
  "/bestSallers": BestSallers,
  "/hotRestock": HotRestock,
  "/collections": Collections,
  "/sales": Sales,
  "/stores": Stores,
  "/vechungtoi": VeChungToi,
  "/nhuongquyen": NhuongQuyen,
  "/tuyendung": TuyenDung,
  "/huongdanmuahang": HuongDanMuaHang,
  "/chinhsachthanhvien": ChinhSachThanhVien,
  "/chinhsachbaomat": ChinhSachBaoMat,
  "/chinhsachthanhtoan": ChinhSachThanhToan,
  "/chinhsachdoivabaohanhsanpham": ChinhSachDoiVaBaoHanhSanPham,
  "/chinhsachbaovethongtinnguoidung": ChinhSachBaoVeThongTinNguoiDung,
};

const createRoutes = (items) => items.map((item) => {
  const Component = componentMap[item.path];
  return {
    path: item.path.substring(1), // Remove leading slash
    element: <Component />,
  };
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <MainPage /> },
      ...createRoutes(menuItems),
      ...createRoutes(footerItems),
    ],
  },
]);

export default router;
