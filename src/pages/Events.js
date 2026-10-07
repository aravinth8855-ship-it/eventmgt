import React from "react";
import EventCard from "../components/EventCard";

function Events({ events }) {
  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Events</h1>
          <p>View and manage all college events.</p>
        </div>
      </div>

      {events.length === 0 ? (
        <div className="empty-box">
          <h2>No Events Found</h2>
          <p>Add a new event from the sidebar.</p>
        </div>
      ) : (
        <div className="event-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;
