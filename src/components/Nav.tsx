import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BarChart,
  Search,
  User,
  ShoppingBag as SBag,
  LogOut,
} from "react-feather";
import "./Nav.css";
import ShoppingBag from "./ShoppingBag";

const styles = {
  navStyles: {
    background: "#eeeeee",
    left: "0%",
    opacity: "1",
    transition: "all 0.5s ease",
    boxShadow: " 0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
  },
  searchStyle: {
    width: "8rem",
    padding: "0.5rem",
    paddingRight: "2rem",
    backgroundColor: "rgb(240, 245, 248)",
    boxShadow: "0px 0.25rem 0.25rem 0px rgba(0, 0, 0, 0.2)",
  },
  dropDownStyles: {
    opacity: "1",
    pointerevents: "auto",
    transform: "translateY(0)",
  },
};

//  Bug: reduce the mobile padding

const Nav = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchBoxStyle, setSearchBoxStyle] = useState<object>({});
  const [mediumDevices, setMediumDevices] = useState<boolean>(false);
  const [navContentStyles, setNavContentStyles] = useState<object>({});
  const [isFocused, setIsFocused] = useState<boolean>(false);

  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    if (searchValue.length > 0) setSearchBoxStyle(styles.searchStyle);
    else setSearchBoxStyle({});
  }, [searchValue]);

  const checksDeviceWidth = useCallback(() => {
    if (window.innerWidth <= 998) {
      setMediumDevices(true);
    } else {
      setNavContentStyles({});
      setIsFocused(false);
      setMediumDevices(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checksDeviceWidth);
    window.addEventListener("load", checksDeviceWidth);
    return () => {
      window.removeEventListener("load", checksDeviceWidth);
      window.removeEventListener("resize", checksDeviceWidth);
    };
  }, [mediumDevices, checksDeviceWidth]);

  const toggleSideMenu = () => {
    if (mediumDevices) {
      let keyLength = Object.keys(navContentStyles).length;
      if (!keyLength) setNavContentStyles(styles.navStyles);
      else setNavContentStyles({});
    }
  };

  const showDropdown = () => {
    if (!isFocused) setIsFocused(true);
  };

  const hideDropdown = () => {
    if (isFocused) setIsFocused(false);
  };

  const runningOnFocus = (val: string) => {
    console.log("innerwidth", window.innerWidth, val);
    if (mediumDevices) return;
    if (val == "focused") showDropdown();
    else hideDropdown();
  };

  return (
    <nav>
      <Link to={"/"} className="Link">
        <h1>tarlet</h1>
      </Link>
      <ul className="nav-menu">
        <div style={navContentStyles} className="nav-text-links-content">
          <NavLink
            activeClassName="active-link"
            to={"/shop"}
            className="Link route-link"
          >
            <li className="nav-item top-link">Shop</li>
          </NavLink>
          <NavLink
            activeClassName="active-link"
            to={"/journal"}
            className="Link route-link"
          >
            <li className="nav-item top-link">Journal</li>
          </NavLink>
          <NavLink
            activeClassName="active-link"
            to={"/aboutus"}
            className="Link route-link"
          >
            <li className="nav-item top-link">About us</li>
          </NavLink>
          <NavLink
            activeClassName="active-link"
            to={"/contact"}
            className="Link route-link"
          >
            <li className="nav-item top-link">Contact</li>
          </NavLink>
        </div>
        <div className="searchBox">
          <input
            type={"text"}
            placeholder="search"
            style={searchBoxStyle}
            className="search-input"
            value={searchValue}
            onChange={changeText}
          />
          <Search className="searchSvg" width={"1.25rem"} height={"1.25rem"} />
        </div>
        <Link to={"/conta"} className="Link shopping-bag">
          <ShoppingBag
            className="nav-item"
            style={{ color: "#3a3a3a", display: "grid" }}
          />
          <span className="cart-total">5</span>
        </Link>
        <div
          className={mediumDevices ? "side-menu-medium active" : "side-menu"}
        >
          <button
            onFocus={() => runningOnFocus("focused")}
            onBlur={() => runningOnFocus("not focused")}
            className={"side-menu-button"}
            onClick={toggleSideMenu}
          >
            <BarChart
              className="bar-chart"
              width={"1.5rem"}
              height={"1.5rem"}
            />
          </button>
          <div
            className="dropdown"
            style={isFocused ? styles.dropDownStyles : {}}
          >
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
