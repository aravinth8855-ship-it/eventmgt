import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onNavigate }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h3>Menu</h3>

      <NavLink to="/" end onClick={onNavigate}>
        Dashboard
      </NavLink>

      <NavLink to="/events" onClick={onNavigate}>
        Events
      </NavLink>

      <NavLink to="/add-event" onClick={onNavigate}>
        Add Event
      </NavLink>
    </aside>
  );
}

export default Sidebar;
