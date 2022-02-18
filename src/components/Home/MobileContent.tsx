import React from "react";
import "./Content.css";

interface Images {
  images: string[];
}

const MobileContent: React.FC<Images> = ({ images }: Images) => {
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
