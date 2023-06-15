import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

export default function Nav() {
  return (
    <div>
      <Header />
      <nav className="navbar">
        <ul>

        <li>
            <NavLink to="/">Landing</NavLink> ||
          </li>

          <li>
            <NavLink to="/">Home</NavLink> ||
          </li>

          <li>
            <NavLink to="/bookmarks">Bookmarks</NavLink> ||
          </li>
          <li>
            <NavLink to="/explore">Explore</NavLink>
          </li>

          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
