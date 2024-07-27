import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Routers/Menu"
const MainLayout = () => {
  return (
    <div>
        <div className="header_info">
        <h5>
        <i>Thank you for chossing Dottie</i>
      </h5>
      <p>
        Holine: <b>0873612976</b> | Liên hệ
      </p>
        </div>
        <div className="menu_router">
            <div className="menu">
                <Menu/>
            </div>
            <div>
              <Outlet/>
            </div>
        </div>
    </div>
  );
};

export default MainLayout;
