import React, { useEffect, useState } from "react";
import "./Carousel.css";
import Images from "./Images";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={Images.first} alt="" className="images" />
        <img src={Images.second} alt="" className="images" />
        <img src={Images.third} alt="" className="images" />
        <img src={Images.fourth} alt="" className="images" />
      </div>
    </div>
  );
};

export default Carousel;
