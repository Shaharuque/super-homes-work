import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  /*Checks If User Is Authenticated*/
  const isLoggedIn = localStorage.getItem("EmployeeToken");
  /*If not Authenticated Redirects to login Route else Goes to Designated Route*/
  return isLoggedIn == null ? <Navigate to="/login" /> : <Outlet />;
};
export default PrivateRoute;
