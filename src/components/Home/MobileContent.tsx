import React from "react";
import "./Content.css";

const MobileContent = ({ images }: any) => {
  const fourImages = images.slice(6);
  return (
    <>
      {fourImages.map((item: any, index: number) => (
        <div className="item">
          <img src={item} style={{ width: "100%", height: "100%" }} alt="" />
        </div>
      ))}
    </>
  );
};

export default MobileContent;
