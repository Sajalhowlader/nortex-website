import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebaseCredential";
import useAdmin from "../../hooks/useAdmin";

const SideBar = ({ children }) => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col  ">{children}</div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-[#e4e1e1] text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/dashboard/myOrder">My Order</NavLink>
            </li>
            <li>

              <NavLink to="/dashboard/review">Review</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myProfile">My Profile</NavLink>
            </li>
            {
              admin && <li>
                <NavLink to="/dashboard/users">All Users</NavLink>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
