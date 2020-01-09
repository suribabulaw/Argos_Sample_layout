import React from 'react';
import Header from './header/index'
import Sidenave from './sidenave/index'
import "./Style.css";
const index = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Sidenave />
             <div className="main_container">{children}</div>
        </React.Fragment>
    );
};

export default index;