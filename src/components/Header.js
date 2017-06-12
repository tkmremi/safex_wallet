import React from 'react';
import Navigation from './Navigation';
import '../css/Header.css';
const Header = () => (
    <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#"><img src="./img/icon_256x256.png" className="img-responsive" alt="logo" /></a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <Navigation />
    </div>
  </div>
</nav>);

export default Header;
