import React from "react";

const IpadContent = ({ images }: any) => {
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
