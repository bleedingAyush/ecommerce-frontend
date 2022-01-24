import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  return (
    <>
      <div
        className="shop-div"
        style={{ display: "flex", justifyContent: "center", gap: "10px" }}
      >
        <NavLink
          activeClassName="active"
          to="/shop/first"
          className="shop-div-link"
        >
          <div>
            <h3>first</h3>
          </div>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/shop/second"
          className="shop-div-link"
        >
          <div>
            <h3>second</h3>
          </div>
        </NavLink>
        <Link to="/third" className="shop-div-link">
          <div>
            <h3>third</h3>
          </div>
        </Link>
        <Link to="/fourth" className="shop-div-link">
          <div>
            <h3>fourth</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Shop;
