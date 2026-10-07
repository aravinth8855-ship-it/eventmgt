import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.name} />

      <div className="event-card-content">
        <span className={`status ${event.status.toLowerCase()}`}>
          {event.status}
        </span>

        <h3>{event.name}</h3>

        <p>📅 {event.date}</p>
        <p>📍 {event.location}</p>
        <p>👥 {event.participants} Participants</p>

        <Link className="view-btn" to={`/events/${event.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
