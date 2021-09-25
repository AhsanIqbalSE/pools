import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import settingIcon from "../../assets/images/settings.png"

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  render () {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
         <Link className="navbar-brand brand-logo" to="/"><img src={require('../../assets/images/panCakeLogo.JPG')} alt="logo" /></Link>
         <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../assets/images/logo-small.JPG')} alt="logo" /></Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button className="navbar-toggler navbar-toggler align-self-center navbar-toggler-large" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="mdi mdi-menu"></span>
          </button>
          <div className="navbar-nav navbar-nav-right">
            <img src={settingIcon} alt="setting" style={{width:"17px"}}></img>
            <button className="btn poolConnect-WalletBtn ml-3">Connect Wallet</button>

          </div>
         
         <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
