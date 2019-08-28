import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav class="nav-header-container">
      <div class="nav-name">
        <NavLink to="/">Planr</NavLink>
      </div>
      <div class="nav-links">
        <NavLink to="/">Your Events</NavLink>
        <NavLink to="/addevent">Create New Event</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
};

export default HeaderNav;
