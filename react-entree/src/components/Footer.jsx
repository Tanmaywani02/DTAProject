import React from 'react';
//import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import facebookIcon from './images/facebook.svg';
import instagramIcon from './images/instagram.svg';
import twitterIcon from './images/twitter.svg';
import '../css/Footer.css';

const FooterComponent = () => {
  return (
    <footer className="footer_main">
      <div className="footer-top d-flex pt-3">
        <div className="contain">
          <p className="mp">COMPANY</p>
          <p><a className="footer_link" href="/#">Us</a></p>
          <p><a className="footer_link" href="/#">Our Brands</a></p>
          <p><a className="footer_link" href="/#">News Feed</a></p>
          <p><a className="footer_link" href="/#">Eat Local Eat Often</a></p>
        </div>
        <div className="contain">
          <p className="mp">OUR SERVICES</p>
          <p><a className="footer_link" href="/#">MenuMax</a></p>
          <p><a className="footer_link" href="/#">HOST Services</a></p>
          <p><a className="footer_link" href="/#">Culinary Resource Team</a></p>
          <p><a className="footer_link" href="/#">Newsletter</a></p>
        </div>
        <div className="contain">
          <p className="mp">CUSTOMER SUPPORT</p>
          <p><a className="footer_link" href="/#">Sales Rep</a></p>
          <p><a className="footer_link" href="/#">Help Center</a></p>
          <p><a className="footer_link" href="/#">Feedback</a></p>
        </div>
        <div className="contain">
          <p className="mp">POLICY & TERMS</p>
          <p><a className="footer_link" href="/#">License Agreement</a></p>
        </div>
        <div className="contain">
          <p className="mp">SIGN UP</p>
          {/* <p><Link className="footer_link" to="/signup">Register</Link></p> */}
          <p>Register</p>
        </div>
      </div>
      <div className="footer_copyright d-flex flex-wrap pb-3">
        <div>
          <img src={logo} alt="Logo" width="100px" />
        </div>
        <div>
          <p>Copyright © 2024 Tanmay, Durgesh, Suvarna</p>
        </div>
        <div className="icons">
          <a href="/#">
            <img src={facebookIcon} alt="Facebook" width="40" height="20" className="fav_img" />
          </a>
          <a href="/#">
            <img src={instagramIcon} alt="Instagram" width="40" height="20" className="fav_img" />
          </a>
          <a href="/#">
            <img src={twitterIcon} alt="Twitter" width="40" height="20" className="fav_img" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
