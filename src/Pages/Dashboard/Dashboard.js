import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <SideBar>
      <div className="title">
        <h1>WELCOME TO DASHBOARD</h1>
      </div>
      <Outlet />
    </SideBar>
  );
};

export default Dashboard;
