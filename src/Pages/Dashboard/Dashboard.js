import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <SideBar>
      {/* <h1>Hello</h1> */}
      <Outlet />
    </SideBar>
  );
};

export default Dashboard;
