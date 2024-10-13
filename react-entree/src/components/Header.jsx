import React, { useState } from 'react';
import logo from '../images/logo.png';
import loginIcon from '../images/log-in.svg';
import bookmarkIcon from '../images/bookmark.svg';
import cartIcon from '../images/shopping-cart.svg';
import '../css/Header.css';
import userIcon from '../images/user-icon.svg';

export function Header(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    // const users =[
    //     { id: 1001, username: 'user1@gmail.com', password: '123' },
    //     { id: 1002, username: 'user2@gmail.com', password: '234' },
    //     { id: 1003, username: 'user3@gmail.com', password: '345' },
    //     { id: 1004, username: 'user4@gmail.com', password: '456' },
    //     { id: 1005, username: 'user5@gmail.com', password: '567' }
    // ]

    // const errors = {
    //     uname: "Invalid username",
    //     pass: "Invalid password"
    //   };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    
    //     var { uname, pass } = document.forms[0];
    //     const userData = users.find((user) => user.username === uname.value);
    //     if (userData) {
    //         if (userData.password !== pass.value) {
    //             setErrorMessages({ name: "pass", message: errors.pass });
    //         } else {
    //             setIsSubmitted(true);
    //             setIsLoggedIn(true);
    //             setUser(userData);
    //             setShowLoginForm(false);
    //         }
    //         } else {
    //           setErrorMessages({ name: "uname", message: errors.uname });
    //         }
    //       };
        
    //       const handleLogout = () => {
    //         setIsLoggedIn(false);
    //         setUser(null);
    //         setIsSubmitted(false);
    //       };

    //       const renderErrorMessage = (name) =>
    //         name === errorMessages.name && (
    //           <div className="error">{errorMessages.message}</div>
    //         );

    //         const renderForm = (
    //             <div>
    //               <form onSubmit={handleSubmit}>
    //                 <div className="input-container mb-3">
    //                   <label className='form-label text-primary'>Username </label><br/>
    //                   <input type="text" name="uname" className="form-control" required />
    //                   {renderErrorMessage("uname")}
    //                 </div>
    //                 <div className="input-container">
    //                   <label className='form-label text-primary'>Password </label>
    //                   <input type="password" name="pass" className="form-control" required /><br/>
    //                   <br/>
    //                   {renderErrorMessage("pass")}
    //                 </div>
    //                 <div className="button-container text-center">
    //                   <button className="btn btn-primary" type="submit" >Submit</button>
    //                 </div>
    //               </form>
    //             </div>
    //           );

    return (
        <div>
          <header id="header">
          
            <div className="container-fluid topbar">
              <nav className="container d-flex justify-content-between pt-2 pb-2"  id='topbarnav'>
                
                <a className="navbar-brand" href="/#">
                  <img src={logo} alt="Logo" width="150" height="50" />
                </a>
      
                <div id="searchdiv" className="d-none d-sm-none d-md-flex">
      
                  <input type="search" name="search" id="searchbar" placeholder="What can we help you Find?" />
                </div>
      
                <div id="iconsdiv" className="iconsdiv">
                {isLoggedIn ? (
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">                    <img src={userIcon} alt="User" width="40" height="20" />
                        </button>

                        <ul className='dropdown-menu'>
                            <li><button className="dropdown-item">My Profile</button></li>
                            <li><button className="dropdown-item" >Logout</button></li> 
                        </ul>
                    </div>
                 ) : (
                    <img src={loginIcon} alt="Login" width="40" height="20" onClick={() => setShowLoginForm(!showLoginForm)} />
                )}  
                  <a href="/wishlist">
                    <img src={bookmarkIcon} alt="icon" width="40" height="20" />
                  </a>
      
                  <a href="/#" >
                    <img src={cartIcon} alt="icon" width="40" height="20" />
                  </a>
                  
                </div>
              </nav>
                
                {/* {isLoggedIn? alert("User is successfully logged in"):<div></div>} */}
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
            {/* {showLoginForm && !isLoggedIn && (
                    <div className="login-form">
                    {renderForm}
                    </div>
                )} */}
          </header>
        </div>
    )
}

export default Header;
