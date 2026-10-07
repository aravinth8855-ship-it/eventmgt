import React from "react";

function Dashboard({ events }) {
  const upcomingEvents = events.filter(
    (event) => event.status === "Upcoming"
  );

  const completedEvents = events.filter(
    (event) => event.status === "Completed"
  );

  let totalParticipants = 0;

  events.forEach((event) => {
    totalParticipants += Number(event.participants);
  });

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Overview of college events.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Events</h3>
          <strong>{events.length}</strong>
        </div>

        <div className="stat-card">
          <h3>Upcoming Events</h3>
          <strong>{upcomingEvents.length}</strong>
        </div>

        <div className="stat-card">
          <h3>Completed Events</h3>
          <strong>{completedEvents.length}</strong>
        </div>

        <div className="stat-card">
          <h3>Total Participants</h3>
          <strong>{totalParticipants}</strong>
        </div>
      </div>

      <div className="dashboard-message">
        <h2>Welcome to the Event Management Dashboard</h2>
        <p>
          Use the sidebar to view events or add a new college event.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
