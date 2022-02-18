import React from "react";

interface Images {
  images: string[];
}

const IpadContent: React.FC<Images> = ({ images }: Images) => {
  const sixImages = images.slice(4);
  return (
    <>
      {sixImages.map((item: any) => (
        <div className="item">
          <img src={item} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
      ))}
    </>
  );
};

export default IpadContent;
