import React from "react";
import "./Content.css";
interface Images {
  images: string[];
}

const ComputerContent: React.FC<Images> = ({ images }: Images) => {
  return (
    <>
      {images.map((item: any) => (
        <div className="item" key={item}>
          <img src={item} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
      ))}
    </>
  );
};

export default ComputerContent;
