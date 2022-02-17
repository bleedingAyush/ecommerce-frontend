import React from "react";
import "./Content.css";

const ComputerContent = ({ images }: any) => {
  return (
    <>
      {images.map((item: any) => (
        <div className="item">
          <img src={item} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
      ))}
    </>
  );
};

export default ComputerContent;
