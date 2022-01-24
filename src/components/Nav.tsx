import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useLocation, NavLink } from "react-router-dom";
// import Search from "../assets/search.svg";
// import shoppingBag from "../assets/shopping-bag.svg";
import {
  BarChart,
  Search,
  User,
  ShoppingBag as SBag,
  LogOut,
} from "react-feather";
import "./Nav.css";
import ShoppingBag from "./ShoppingBag";

interface E {
  e: object;
  target: any;
  (): object;
}

const Nav = () => {
  const location = useLocation();
  console.log("routeMatch", location);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchBoxStyle, setSearchBoxStyle] = useState<object>({});
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);
  const [linkStyles, setLinkStyles] = useState<object>({
    shop: {},
    journal: {},
    contact: {},
  });

  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    if (searchValue.length > 0) {
      setSearchBoxStyle({
        width: "8rem",
        padding: "8px",
        backgroundColor: "rgb(240, 245, 248)",
        boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.2)",
        paddingRight: "33px",
      });
    } else {
      setSearchBoxStyle({});
    }
  }, [searchValue]);

  useEffect(() => {
    const stylesObj = {
      content: "",
      position: "absolute",
      backgroundColor: "#3a3a3a",
      width: "50%",
      height: "0.15rem",
      left: "25%",
      bottom: "-10px",
    };
    if (location.pathname) {
      setLinkStyles({ [location.pathname]: stylesObj });
    }
    console.log(linkStyles);
  }, [location]);

  return (
    <nav>
      <Link to={"/"} className="Link">
        <h1>tarlet</h1>
      </Link>
      <ul className="nav-links">
        <NavLink
          activeClassName="active-link"
          to={"/shop"}
          className="Link route-link"
        >
          <li className="links top-link">Shop</li>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to={"/journal"}
          className="Link route-link"
        >
          <li className="links top-link">Journal</li>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to={"/aboutus"}
          className="Link route-link"
        >
          <li className="links top-link">About us</li>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to={"/contact"}
          className="Link route-link"
        >
          <li className="links top-link">Contact</li>
        </NavLink>

        <div className="contents">
          <div className="searchBox">
            <input
              type={"text"}
              placeholder="search"
              style={searchBoxStyle}
              className="search-input"
              value={searchValue}
              onChange={changeText}
              disabled={inputDisabled}
            />
            <Search
              className="searchSvg"
              width={"1.25rem"}
              height={"1.25rem"}
            />
          </div>
        </div>
        <Link to={"/conta"} className="Link shopping-bag">
          {/* <ShoppingBag className="links" width={"20px"} height={"20px"} /> */}
          <ShoppingBag
            className="links"
            style={{ color: "#3a3a3a", display: "grid" }}
          />
          <span className="cart-total">5</span>
        </Link>
        <div className="side-menu">
          {/* <div className="side-box"></div> */}
          <button>
            <BarChart
              className="bar-chart"
              width={"1.25rem"}
              height={"1.25rem"}
            />
          </button>
          <div className="dropdown">
            <Link to="/shop" className="Link-dropdown">
              <User />
              <span>Account</span>
            </Link>
            <Link to="/jj" className="Link-dropdown">
              <SBag />
              <span>Orders</span>
            </Link>
            <Link to="/f" className="Link-dropdown">
              <LogOut />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
