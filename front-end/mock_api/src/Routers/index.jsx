import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import MainPage from "../pages/MainPage";
import NewProduct from "../pages/NewProduct";
import Product from "../pages/Product";
import BestSallers from "../pages/BestSallers";
import HotRestock from "../pages/HotRestock";
import Collections from "../pages/Collections";
import Sales from "../pages/Sales";
import Stores from "../pages/Stores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "newProduct",
        element: <NewProduct />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "bestSallers",
        element: <BestSallers />,
      },
      {
        path: "hotRestock",
        element: <HotRestock />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
      {
        path: "sales",
        element: <Sales />,
      },
      {
        path: "stores",
        element: <Stores />,
      },
    ],
  },
]);

export default router;
