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

  function laptopClass() {
    console.log(window.innerWidth);
    if (window.innerWidth < 988) return;
    const hamburgerButton = document.querySelector(".side-menu-button");
    hamburgerButton?.classList.add("computer");
  }

  function removelaptopClass() {
    if (window.innerWidth < 988) return;
    const hamburgerButton = document.querySelector(".side-menu-button");
    hamburgerButton?.classList.remove("computer");
  }

  const toggleSideMenu = () => {
    if (window.innerWidth > 988) return;
    const links = document.querySelector(".nav-text-links-content");
    const isActive = links?.classList.contains("mobiles");

    if (isActive) {
      links?.classList.remove("mobiles");
    } else {
      links?.classList.add("mobiles");
    }
  };

  const removeMobilesClass = () => {
    if (window.innerWidth > 988) return;
    const links = document.querySelector(".nav-text-links-content");
    links?.classList.remove("mobiles");
  };

  return (
    <nav>
      <Link to={"/"} className="Link" onClick={removeMobilesClass}>
        <h1>tarlet</h1>
      </Link>
      <ul className="nav-menu">
        <div className="nav-text-links-content">
          <NavLink
            activeClassName="active-link"
            to={"/shop"}
            className="Link route-link"
            onClick={removeMobilesClass}
          >
            <li className="nav-item nav-link">Shop</li>
          </NavLink>
          <NavLink
            activeClassName="active-link"
            to={"/journal"}
            className="Link route-link"
            onClick={removeMobilesClass}
          >
            <li className="nav-item nav-link">Journal</li>
          </NavLink>
          <NavLink
            activeClassName="active-link"
            to={"/aboutus"}
            className="Link route-link"
            onClick={removeMobilesClass}
          >
            <li className="nav-item nav-link">About us</li>
          </NavLink>
          <NavLink
            activeClassName="active-link"
            to={"/contact"}
            className="Link route-link"
            onClick={removeMobilesClass}
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
          <button
            onFocus={laptopClass}
            onBlur={removelaptopClass}
            className={"side-menu-button"}
            onClick={toggleSideMenu}
          >
            <BarChart
              className="bar-chart"
              width={"1.5rem"}
              height={"1.5rem"}
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
