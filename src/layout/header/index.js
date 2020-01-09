import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
const index = () => {
  return (
    <div className="wrapper">
      <div className="top_navbar">
        {/* <div className="hamburger">
       <div className="one"></div>
       <div className="two"></div>
       <div className="three"></div>
    </div> */}
        <div className="top_menu">
          <div className="logo">logo</div>
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-search"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-bell"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-user"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
