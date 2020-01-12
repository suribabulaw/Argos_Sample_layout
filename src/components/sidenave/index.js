import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
const index = () => {
  return (
    <React.Fragment>
      <div className="argos_nav">
          <div className="argos_humburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul>
            <li>
              <Link  to="/">
                <span className="argos_menu_title">Dashboad</span>
                <span className="argos_menu_icon">
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="argos_menu_title">Settings</span>
                <span className="argos_menu_icon">
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </span>
              </Link>
            </li>
            <li>
              <Link  to="/">
                <span className="argos_menu_title">administration</span>
                <span className="argos_menu_icon">
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </span>
                 <ul>
                   <li><Link to='addUser'>User management</Link></li>
                   <ul>
                     <li><Link to="/addUser">Add User</Link></li>
                     <li><Link to="/deleteuser">Assign customer from field</Link></li>
                     <li><Link to="/assigncustomer">Delete User</Link></li>
                   </ul>
                 </ul>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="argos_menu_title">others Argos</span>
                <span className="argos_menu_icon">
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </span>
              </Link>
            </li>
          </ul>
      </div>
    </React.Fragment>
  );
};

export default index;
