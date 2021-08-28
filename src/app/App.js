import React, { Component, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import { withTranslation } from "react-i18next";

const App=()=>  {
    
    return (
      <div className="container-scroller">
         <Navbar/>
        <div className="container-fluid page-body-wrapper">
        <Sidebar/> 
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes/>

            </div>
            {/* footer */}
          </div>
        </div>
      </div>
    );



}

export default withTranslation()(withRouter(App));
