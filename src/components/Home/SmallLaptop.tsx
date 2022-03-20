import React from "react";
import "./Carousel.css";

interface Images {
  images: string[];
}

const SmallLaptop: React.FC<Images> = ({ images }: Images) => {
  const eightImages = images.slice(2);
  return (
    <>
      {eightImages.map((item) => {
        return (
          <div className="item" key={item}>
            <img src={item} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
        );
      })}
    </>
  );
};

export default SmallLaptop;
