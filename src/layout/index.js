import React from 'react';
import Header from '../components/header/index'
import Sidenave from '../components/sidenave/index'
import "./Style.css";
const index = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Sidenave />
            <div className="Argos_main_container">
                {children}
            </div>
        </React.Fragment>
    );
};

export default index;