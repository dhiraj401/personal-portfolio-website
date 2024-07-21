import React, { useState } from "react";
import "./Layout.css";
import Home from "../../pages/Home/Home";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <BsChevronDoubleRight size={30} />
              ) : (
                <BsChevronDoubleLeft size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
