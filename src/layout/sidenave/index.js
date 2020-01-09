import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
const index = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="hamburger">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <ul>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fas fa-book"></i>
              </span>
              <span className="title">Books</span>
            </Link>
          </li>
          <li>
            <Link to="/adduser">
              <span className="icon">
                <i className="fas fa-file-video"></i>
              </span>
              <span className="title">Movies</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <i className="fas fa-volleyball-ball"></i>
              </span>
              <span className="title">Sports</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="active">
              <span className="icon">
                <i className="fas fa-blog"></i>
              </span>
              <span className="title">Blogs</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <i className="fas fa-leaf"></i>
              </span>
              <span className="title">Nature</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
