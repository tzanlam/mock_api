import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "700px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  //   background: "#364d79",
};
const CarouselHome = () => (
  <>
    <Carousel arrows infinite={true}>
      <div>
        <h3 style={contentStyle}>
          <div className="">
            {/* <a href="/" title="Home Page" className="mr-4"> */}
            <img
              src="https://theme.hstatic.net/1000324561/1001250011/14/slide_2_img.jpg?v=300"
              alt=""
              className="w-full h-full"
            />
            {/* </a> */}
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <div className="">
            {/* <a href="/" title="Home Page" className="mr-4"> */}
            <img
              src="https://theme.hstatic.net/1000324561/1001250011/14/slide_3_img.jpg?v=300"
              alt=""
              className="w-full h-full"
            />
            {/* </a> */}
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <div className="">
            {/* <a href="/" title="Home Page" className="mr-4"> */}
            <img
              src="https://theme.hstatic.net/1000324561/1001250011/14/slide_4_img.jpg?v=300"
              alt=""
              className="w-full h-full"
            />
            {/* </a> */}
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <div className="">
            {/* <a href="/" title="Home Page" className="mr-4"> */}
            <img
              src="https://theme.hstatic.net/1000324561/1001250011/14/slide_1_img.jpg?v=300"
              alt=""
              className="w-full h-full"
            />
            {/* </a> */}
          </div>
        </h3>
      </div>
    </Carousel>
  </>
);
export default CarouselHome;
