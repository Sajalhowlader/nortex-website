import { signOut } from "firebase/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebaseCredential";
import blank from "../../images/svg/blank.webp";
import "../../Pages/CssFile/AllCss.css";
const Header = ({ color }) => {
  const [colorChange, setColorchange] = useState(false);
  const [user] = useAuthState(auth);
  const [hambarger, setHambarger] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
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
    <nav
      style={{ background: color }}
      className={colorChange ? "nav_ber colorChange " : "nav_ber"}
    >
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
            <h2 className="text-3xl text-bold "><Link to='/'>Nortex</Link></h2>
          </div>
          <div className={hambarger ? "mobile-btn" : "menu-btn"}>
            <div>
              <ul className={colorChange ? " menu-link_2" : "menu-ul"}>
                <NavLink className={({ isActive }) =>
                  isActive ? "activeStyle" : "menu-link"}  to="/">
                  HOME
                </NavLink>
                <NavLink className={({ isActive }) =>
                  isActive ? "activeStyle" : "menu-link"}  to="/allProducts">
                  ALL PRODUCTS
                </NavLink>
                <NavLink className={({ isActive }) =>
                  isActive ? "activeStyle" : "menu-link"}  to="/blogs">
                  BLOGS
                </NavLink>
                <NavLink className={({ isActive }) =>
                  isActive ? "activeStyle" : "menu-link"}  to="/protFolio">
                  PORTFOLIO
                </NavLink>

                {user && (
                  <NavLink className={({ isActive }) =>
                  isActive ? "activeStyle" : "menu-link"} 
                   to="/dashboard/myProfile">
                    DASHBOARD
                  </NavLink>
                )}
              </ul>
            </div>

            <div className="sing-btn">
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
                    SIGN OUT
                  </button>
                </>
              ) : (
                <>
                  <Link to="/singIn">
                    <button className="sing-in">SIGN IN</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
