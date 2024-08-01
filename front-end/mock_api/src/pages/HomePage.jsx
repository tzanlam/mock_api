import React from "react";
import HeaderHome from "./HeaderHome";
import Content1 from "./ContentHome/Content1";
import Content2 from "./ContentHome/Content2";
import ProductNews from "./ContentHome/ProductNews";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 h-[3000px]">
      <HeaderHome />
      <Content1 />
      <Content2 />
      <ProductNews />
    </div>
  );
};

export default HomePage;
