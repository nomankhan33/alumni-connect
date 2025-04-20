import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo_wo (2).png";
import { AuthContext } from "../../context/authContext";
import "./Header.css";

const Header1 = () => {
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
      <div className="navbar-center" style={{
        display: "flex", 
        justifyContent: "center",
        flex: "1",
        gap: "25px"
      }}>
        <Link to="/home" style={{textDecoration: "none", color: "rgb(95, 177, 204)", fontWeight: "bold", fontSize: "16px"}}>Home</Link>
        <Link to="/alumni-directory" style={{textDecoration: "none", color: "rgb(95, 177, 204)", fontWeight: "bold", fontSize: "16px"}}>Alumni Directory</Link>
        <Link to="/events" style={{textDecoration: "none", color: "rgb(95, 177, 204)", fontWeight: "bold", fontSize: "16px"}}>Events</Link>
      </div>
      <div className="navbar-right" style={{display: "flex", alignItems: "center", gap: "25px"}}>
        <button className="profile_icon">{currentUser.name}</button>
        <button className="logout_btn" style={{fontWeight: "bold"}} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header1;