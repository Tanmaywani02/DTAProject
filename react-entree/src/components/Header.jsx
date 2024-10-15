import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
//import loginIcon from '../images/log-in.svg';
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import bookmarkIcon from '../images/bookmark.svg';
import cartIcon from '../images/shopping-cart.svg';
import '../css/Header.css';
import userIcon from '../images/user-icon.svg';
import { useNavigate } from "react-router-dom";


export function Header(){
  const navigate = useNavigate();

  const handleCartClick=()=>{
    if(localStorage.getItem("id")!==null){
      navigate("/cart")
    }
    else{
      navigate("/login")
    }
  }

  const handleWishlistClick=()=>{
    if(localStorage.getItem("id")!==null){
      navigate("/wishlist")
    }
    else{
      navigate("/login")
    }
  }

  const handleLogClick=()=>{
    console.log("inside")
    if(localStorage.getItem("id")!==null){
      localStorage.clear();
      setLogIcon(<LuLogIn/>)
      alert("Logout Successfully")
      navigate("/")
    }
    else{
      navigate("/login")
    }
    console.log("out");
    
  }

  const [logIcon, setLogIcon] = useState(<LuLogIn/>)

  useEffect(()=>{
    if(localStorage.getItem("id")!==null){
      setLogIcon(<IoPerson/>)
    }
    else{
      setLogIcon(<LuLogIn/>)
    }
  },[localStorage.getItem("id")])
  
    return (
        <div>
          <header id="header">
          
            <div className="container-fluid topbar">
              <nav className="container d-flex justify-content-between pt-2 pb-2"  id='topbarnav'>
                
                <button className="navbar-brand btn btn-outline-light" href="">
                  <img src={logo} alt="Logo" width="150" height="50" onClick={()=>navigate("/")} />
                </button>
      
                <div id="searchdiv" className="d-none d-sm-none d-md-flex">
      
                  <input type="search" name="search" id="searchbar" placeholder="What can we help you Find?" />
                </div>
      
                <div id="iconsdiv" className="iconsdiv">
                 <div className="btn btn-link logicon" onClick={()=>handleLogClick()} style={{cursor:"pointer"}}> {logIcon}
                 </div>
                  <button className="btn btn-link">
                    <img src={bookmarkIcon} alt="icon" width="40" height="20" onClick={()=>handleWishlistClick()}/>
                  </button>
                  <button className="btn btn-link">
                    <img src={cartIcon} alt="icon" width="40" height="20" onClick={()=>handleCartClick()}/>
                  </button>
                  
                </div>
              </nav> 
            </div>
          </header>
        </div>
    )
}

export default Header;
