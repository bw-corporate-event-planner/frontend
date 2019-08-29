import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="nav-header-container">
      <div className="nav-name">
        <NavLink to="/">Planr</NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/">Your Events</NavLink>
        <NavLink to="/addevent">Create New Event</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
};

export default HeaderNav;
