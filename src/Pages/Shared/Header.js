import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebaseCredential";
import "../../Pages/CssFile/AllCss.css";
import blank from "../../images/svg/blank.webp";
const Header = () => {
  const [user] = useAuthState(auth);
  const [hambarger, setHambarger] = useState(false);

  const handleSingOut = () => {
    signOut(auth);
  };
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
                <NavLink className="menu-link" to="/pre">
                  pre
                </NavLink>
              </ul>
            </div>

            <div>
              <Link to="/singIn">
                {user ? (
                  <>
                    <img
                      class="w-10 rounded-full avatar online ring ring-primary ring-offset-base-100  avater-img"
                      src={user.photoURL}
                      alt=""
                    />
                    <button onClick={handleSingOut} className="sing-in">
                      SING OUT
                    </button>
                  </>
                ) : (
                  <>
                    <img
                      class="w-10 rounded-full avatar online ring ring-primary ring-offset-base-100  avater-img"
                      src={blank}
                      alt=""
                    />
                    <button className="sing-in">SING IN</button>
                  </>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
