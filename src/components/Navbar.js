import React from "react";

function Navbar({ onLogout, onMenuClick }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={onMenuClick}>
          ☰
        </button>

        <div>
          <h2>College Events</h2>
          <p>Event Management Dashboard</p>
        </div>
      </div>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </header>
  );
}

export default Navbar;
