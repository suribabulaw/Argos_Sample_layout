import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.jpg'
import "./Style.css";
const index = () => {
  return (
    <div className='argos_header'>
       
       <img className='ms_logo' src={Logo} alt='logo' height="25px"/>
       <div className="ms_logo_block"></div>
        <img className='ms_logo_argos' src={Logo} alt='logo' height="25px"/>
        <form style={{ paddingRight : "400px"}}>
          <input />
        </form>
        <ul>
          <li><Link to="/"><i class="fas fa-envelope"></i></Link></li>
          <li><Link to="/"><i className="fas fa-user"></i></Link></li>
        </ul>
       
    </div>
  );
};

export default index;
