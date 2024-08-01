import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "10",
  color: "#fff",
  lineHeight: "10",
  textAlign: "center",
  //   background: "#364d79",
};
const ScrollImg = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <div className="">
          <a href="/" title="Home Page" className="mr-4">
            <img
              src="https://product.hstatic.net/1000324561/product/0t0960_0s0236__5__61b2c48d33e64ebeac49673e35236d99_master.jpg"
              alt=""
              className=""
            />
          </a>
        </div>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <div className="">
          <a href="/" title="Home Page" className="mr-4">
            <img
              src="https://product.hstatic.net/1000324561/product/0t0960_0s0236__4__e166421d6cce436f9a37460f69d003d2_master.jpg"
              alt=""
              className=""
            />
          </a>
        </div>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default ScrollImg;
