import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../Pages/CssFile/AllCss.css";
const Header = () => {
  const [hambarger, setHambarger] = useState(false);
  return (
    <nav className="nav_ber">
      <div className="container mx-auto px-8">
        <div className="logo-menu-container">
          <button
            onClick={() => setHambarger(!hambarger)}
            class="btn btn-square btn-ghost hambarger"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div className="site-name">
            <h2 className="text-3xl text-bold ">Nortex </h2>
          </div>
          <div className={hambarger ? "mobile-btn" : "menu-btn"}>
            <div>
              <ul className="menu-ul">
                <NavLink className="menu-link" to="/">
                  HOME
                </NavLink>
                <NavLink className="menu-link" to="/">
                  HOME
                </NavLink>
                <NavLink className="menu-link" to="/">
                  HOME
                </NavLink>
                <NavLink className="menu-link" to="/">
                  HOME
                </NavLink>
              </ul>
            </div>

            <div>
              <button className="sing-in">
                <Link to="/singIn">SING IN</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
