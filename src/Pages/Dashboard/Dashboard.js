import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <SideBar>
      <Outlet />
    </SideBar>
  );
};

export default Dashboard;
