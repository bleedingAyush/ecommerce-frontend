import React from "react";
import "./Carousel.css";

const SmallLaptop = ({ images }: any) => {
  const eightImages = images.slice(2);
  return (
    <>
      {eightImages.map((item: any) => {
        return (
          <div className="item">
            <img src={item} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
        );
      })}
    </>
  );
};

export default SmallLaptop;
