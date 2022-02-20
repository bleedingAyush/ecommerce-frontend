import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-item first-item">
          <div className="footer-content">
            <Link to="/" className="footer-link">
              <h1>TARLET</h1>
            </Link>
            <span className="information">Shop branded clothes</span>
            <span className="tagline">Be Bold.</span>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-content">
            <h4>Explore</h4>
            <ul>
              <Link to="/home" className="footer-link">
                <li className="footer-lists">Home</li>
              </Link>
              <Link to="/shop" className="footer-link">
                <li className="footer-lists">Shop</li>
              </Link>
              <Link to="/about" className="footer-link">
                <li className="footer-lists">About</li>
              </Link>
              <Link to="/career" className="footer-link">
                <li className="footer-lists">Careers</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-content">
            <h4>Visit</h4>
            <span className="address">Tarlet So. California</span>
            <span className="address">33 canbarea site, Ste 112</span>
            <span className="address">Irvine, Ca, USA 92618</span>
            <h4 style={{ marginTop: "1.4rem" }}>New Business</h4>
            <span className="address">engage@tarlet.com</span>
            <span className="address">855.944.4949</span>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-content">
            <h4>Follow</h4>
            <Link to="#" className="footer-link">
              <span>Instagram</span>
            </Link>
            <Link to="" className="footer-link">
              <span>Twitter</span>
            </Link>
            <Link to="" className="footer-link">
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-content">
            <h4>Legal</h4>
            <Link to="#" className="footer-link">
              <span>Terms</span>
            </Link>
            <Link to="" className="footer-link">
              <span>Privacy</span>
            </Link>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-content">
            <Link to="/" className="next-link">
              <span className="next-text after-effect">Next: Shop</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <span className="copyright-text">
          &copy; 2022 Envoy. All rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
