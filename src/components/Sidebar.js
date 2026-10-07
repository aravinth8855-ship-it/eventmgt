import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h3>Menu</h3>

      <NavLink to="/" end>
        Dashboard
      </NavLink>

      <NavLink to="/events">
        Events
      </NavLink>

      <NavLink to="/add-event">
        Add Event
      </NavLink>
    </aside>
  );
}

export default Sidebar;
