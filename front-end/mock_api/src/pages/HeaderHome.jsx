import React from "react";
import ModalHome from "../components/ModalHome";
import { FaHeart } from "react-icons/fa";
import ButtonProduct from "../components/buttonDetail/ButtonProduct";
import EndowButton from "../components/buttonDetail/EndowButton";
import CollectionButton from "../components/buttonDetail/CollectionButton";
import { CiHeart } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";

const HeaderHome = () => {
  return (
    <div className="">
      <ModalHome />

      <div className="bg-white w-full h-16 flex justify-center">
        <div className="flex flex-row gap-1 items-center text-2xl font-medium">
          <FaHeart className="text-red-600" />
          <div>Freeship cho hoa don tu 70k</div>
          <FaHeart className="text-red-600" />
        </div>
      </div>

      <div className="bg-black text-white w-full h-14 flex flex-row items-center pl-12 text-2xl">
        <div>
          Hotline: <span className="font-bold">0938.244.006</span> (8h - 22h){" "}
          <span className="pl-5 pr-5 font-medium text-3xl text-gray-200">
            |
          </span>
          <span className="pl-5 pr-5  text-2xl text-gray-200">Liên hệ</span>
        </div>
      </div>

      <div className="bg-white w-full h-36 mt-9 flex flex-row">
        <div className="flex md:flex-row flex-col ml-20">
          <a href="/" title="Home Page" className="mr-4">
            <img
              src="https://theme.hstatic.net/1000324561/1001250011/14/logo.png?v=294"
              alt=""
              className="w-[226px] h-[64px]"
            />
          </a>
        </div>

        <div className="text-gray-950 text-3xl font-semibold flex flex-row gap-16 items-center ml-32">
          <div>HÀNG MỚI</div>
          <div>
            <ButtonProduct />
          </div>
          <div>BEST SELLERS</div>
          <div>HOT RESTOCK</div>
          <div>
            <CollectionButton />
          </div>
          <div>
            <EndowButton />
          </div>
          <div> CỬA HÀNG </div>
        </div>

        <div className="flex items-center flex-row ml-64 gap-10">
          <div>
            <CiHeart className="text-6xl font-extrabold" />
          </div>

          <div>
            <GoSearch className="text-5xl font-extrabold" />
          </div>

          <div>
            <BsPerson className="text-6xl font-extrabold" />
          </div>

          <div>
            <BsCart2 className="text-5xl font-extrabold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
