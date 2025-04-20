import React from "react";
//import blob from "../images/blob.svg";
import { useContext, useState } from "react";
import "./Header.css";
import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo_wo (2).png";
import { AuthContext } from "../../context/authContext";


const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="logo_image" src={logo} width="80px" alt="Logo" />
        <h1 className="nav-heading">CONNECT JAMIA</h1>
      </div>
      <div className="navbar-right">
        <button className="profile_icon">{currentUser.name}</button>
        <button className="logout_btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;

