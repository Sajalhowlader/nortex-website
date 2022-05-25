import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebaseCredential";

const Protected = ({ children }) => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/singIn" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default Protected;
