import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PublicRoute = () => {
  /*Checks If User Is Authenticated*/
  const isLoggedIn = localStorage.getItem("EmployeeToken");
  /*If Authenticated Stops From Going to login route*/
  return isLoggedIn !== null ? <Navigate to="/" /> : <Outlet />;
};
export default PublicRoute;
