import React, { useEffect, useState } from "react";
// import "./About.css";

interface E {
  e: object;
  target: any;
}

const About = () => {
  return (
    <div className="header">
      <div className="dropdown">
        <button className="links">Information</button>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            <span></span>
          </div>
        </div>
      </div>
      <a href="#" className="link">
        Pricing
      </a>
      <button className="link">Login</button>
    </div>
  );
};

export default About;
