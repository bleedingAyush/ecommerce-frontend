import React, { useState } from "react";
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

const Nav = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  const clicked = () => {
    toggleClass(".side-menu-button", "active");
    if (window.innerWidth > 988) {
      toggleClass(".side-menu-button", "computer");
    } else {
      toggleClass(".nav-text-links-content", "mobiles");
    }
  };

  const toggleClass = (element: string, classname: string) => {
    const documentSelector = document.querySelector(element);
    const isActive = documentSelector?.classList.contains(classname);
    if (isActive) {
      documentSelector?.classList.remove(classname);
    } else {
      documentSelector?.classList.add(classname);
    }
  };

  function removeClass(element: string, classname: string) {
    const documentSelector = document.querySelector(element);
    documentSelector?.classList.remove(classname);
  }

  const removeSideMenuClass = () => {
    removeClass(".side-menu-button", "active");
    if (window.innerWidth > 988) {
      removeClass(".side-menu-button", "computer");
    } else {
      removeClass(".nav-text-links-content", "mobiles");
    }
  };

  return (
    <nav>
      <Link to={"/"} className="Link" onClick={removeSideMenuClass}>
        <h1>tarlet</h1>
      </Link>
      <ul className="nav-menu">
        <div className="nav-text-links-content">
          <NavLink
            activeClassName="active-link"
            to={"/shop"}
            className="Link route-link"
            onClick={removeSideMenuClass}
          >
            <li className="nav-item nav-link">Shop</li>
          </NavLink>
          <NavLink
            activeClassName="active-link"
            to={"/journal"}
            className="Link route-link"
            onClick={removeSideMenuClass}
          >
            <li className="nav-item nav-link">Journal</li>
          </NavLink>
          <NavLink
            activeClassName="active-link"
            to={"/aboutus"}
            className="Link route-link"
            onClick={removeSideMenuClass}
          >
            <li className="nav-item nav-link">About us</li>
          </NavLink>
          <NavLink
            activeClassName="active-link"
            to={"/contact"}
            className="Link route-link"
            onClick={removeSideMenuClass}
          >
            <li className="nav-item nav-link">Contact</li>
          </NavLink>
        </div>
        <div className="searchBox">
          <input
            type={"text"}
            placeholder="search"
            className="search-input"
            value={searchValue}
            onChange={changeText}
          />
          <Search className="searchSvg" width={"1.25rem"} height={"1.25rem"} />
        </div>
        <Link to={"/conta"} className="Link shopping-bag">
          <ShoppingBag
            className="nav-item shop-bag"
            style={{ color: "#3a3a3a", display: "grid" }}
          />
          <span className="cart-total">5</span>
        </Link>
        <div className="side-menu">
          <button className={"side-menu-button"} onClick={clicked}>
            <BarChart
              className="bar-chart"
              width={"1.5rem"}
              height={"1.5rem"}
            />
          </button>
          <div className="dropdown">
            <div className="drp-links">
              <Link
                to="/shop"
                className="Link-dropdown"
                onClick={removeSideMenuClass}
              >
                <User />
                <span>Account</span>
              </Link>
              <Link
                to="/jj"
                className="Link-dropdown"
                onClick={removeSideMenuClass}
              >
                <SBag />
                <span>Orders</span>
              </Link>
              <Link
                to="/f"
                className="Link-dropdown"
                onClick={removeSideMenuClass}
              >
                <LogOut />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
