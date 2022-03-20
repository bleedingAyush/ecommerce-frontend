import React from "react";
import { X } from "react-feather";
import Dropdown from "../Dropdown";

const CartProducts = ({ image }: any) => {
  return (
    <>
      <div className="product-info expand center-between">
        <img className="product-images" src={image} alt="" />
        <div className="product-texts">
          <span className="product-name">Sandqvist</span>
          <span className="product-brand">Zack</span>
        </div>
      </div>
      <Dropdown />
      <div className="quantity-content">
        <span>-</span>
        <span style={{ fontSize: "16px", marginTop: "4px" }}>2</span>
        <span>+</span>
      </div>
      <span className="">$1219.98</span>
      <div className="remove-btn">
        <X />
      </div>
    </>
  );
};

export default CartProducts;
