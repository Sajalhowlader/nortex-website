import { signOut } from "firebase/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebaseCredential";
import blank from "../../images/svg/blank.webp";
import "../../Pages/CssFile/AllCss.css";
const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const [user] = useAuthState(auth);
  const [hambarger, setHambarger] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const handleSingOut = () => {
    signOut(auth);
  };

  return (
    <nav className={colorChange ? "nav_ber colorChange" : "nav_ber"}>
      <div className="container mx-auto px-8">
        <div className="logo-menu-container">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-square btn-ghost lg:hidden hambarger ham-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <button
            onClick={() => setHambarger(!hambarger)}
            className="btn btn-square btn-ghost hambarger"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
                <NavLink className="menu-link" to="/allProducts">
                  ALL PRODUCTS
                </NavLink>
                <NavLink className="menu-link" to="/blogs">
                  BLOGS
                </NavLink>
                <NavLink className="menu-link" to="/protFolio">
                  PORTFOLIO
                </NavLink>

                {user && (
                  <NavLink className="menu-link" to="/dashboard/myProfile">
                    DASHBOARD
                  </NavLink>
                )}
              </ul>
            </div>

            <div>
              <Link to="/singIn">
                {user ? (
                  <>
                    {user.photoURL ? (
                      <img
                        className="w-10 rounded-full avatar online ring ring-primary ring-offset-base-100  avater-img"
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-10 rounded-full avatar online ring ring-primary ring-offset-base-100  avater-img"
                        src={blank}
                        alt=""
                      />
                    )}
                    <button onClick={handleSingOut} className="sing-in">
                      SING OUT
                    </button>
                  </>
                ) : (
                  <>
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
