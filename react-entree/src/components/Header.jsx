import React, { useState } from 'react';
import logo from '../images/logo.png';
import loginIcon from '../images/log-in.svg';
import bookmarkIcon from '../images/bookmark.svg';
import cartIcon from '../images/shopping-cart.svg';
import '../css/Header.css';


const HeaderComponent = ({isLogin}) => {
  //const navigate = useNavigate();

  const login = () => {
    // if (localStorage.getItem("id") !== undefined) {
    //   localStorage.clear();
    //   //navigate('/');
    //   alert("Logout Successful!!");
    // } else {
    //   //navigate('/login');
    // }
    console.log(isLogin)
  };


  return (
    <header id="header">
      <div className="container-fluid topbar">
        <nav className="container d-flex justify-content-between pt-2 pb-2" id='topbarnav'>
          
          <a className="navbar-brand" href="/#">
            <img src={logo} alt="Logo" width="150" height="50" />
          </a>

          <div id="searchdiv" className="d-none d-sm-none d-md-flex">

            <input type="search" name="search" id="searchbar" placeholder="What can we help you Find?" />
          </div>

          <div id="iconsdiv" className="iconsdiv">

            <a href="/#" onClick={login}>
              <img src={loginIcon} alt="icon" width="40" height="20" />
            </a>

            <a href="/wishlist">
              <img src={bookmarkIcon} alt="icon" width="40" height="20" />
            </a>

            <a href="/#" >
              <img src={cartIcon} alt="icon" width="40" height="20" />
            </a>
            
          </div>
        </nav>
      </div>
      {/* <nav className="navbar navbar-expand-md" id="menu">
        <button className="navbar-toggler toggler_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon custom-toggler"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav me-auto m-3 m-md-0 mb-lg-0 nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#recommend">RECOMMENDATION</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#topcat">TOP CATEGORY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#newitems">NEW ITEMS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#itemleft">ITEMS LEFT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#exclusivebrands">EXCLUSIVE BRANDS</a>
            </li>
          </ul>
        </div>
      </nav> */}
    </header>
   
  );
};

export default HeaderComponent;
