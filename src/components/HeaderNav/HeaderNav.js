import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const HeaderNav = () => {
  function logout(props) {
    axios
      .post("https://egge-corporate-ep.herokuapp.com/api/logout")
      .then(response => {
        console.log(response);
        props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  // TESTING CONDITIONAL RENDERING
  const user = {
    // role: "admin",
    role: "user"
    // role: "manager"
  };

  const loggedOut = null;

  return (
    <nav className="nav-header-container">
      <div className="nav-name">
        <NavLink to="/">Planr</NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/">Your Events</NavLink>
        {user.role === "admin" ? (
          <NavLink to="/addevent">Create New Event</NavLink>
        ) : null}
        {/* <NavLink to="/addevent">Create New Event</NavLink> */}
        <NavLink to="/register">Register</NavLink>
        {/* {loggedOut ? ( */}
        <NavLink to="/login">Login</NavLink>
        {/* ) : ( */}
        <button onClick={logout}>LOGOUT</button>
        {/* )} */}
      </div>
    </nav>
  );
};

export default HeaderNav;
