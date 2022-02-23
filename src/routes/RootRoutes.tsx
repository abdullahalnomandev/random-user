import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/Login/PrivateRoute";
import Home from "../pages/Home";
import UserDetailsInfo from "../pages/UserDetailsInfo";
const RootRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /> </PrivateRoute> } />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<PrivateRoute>< UserDetailsInfo /> </PrivateRoute> } />
      </Routes>
    </div>
  );
};

export default RootRouters;
