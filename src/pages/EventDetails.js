import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EventDetails({ events, onUpdateEvent, onDeleteEvent }) {
  const { id } = useParams();//get id from the URL
  const navigate = useNavigate();

  const event = events.find((item) => item.id === Number(id));

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState(
    event
      ? {
          name: event.name,
          date: event.date,
          location: event.location,
          description: event.description,
          maxParticipants: event.maxParticipants,
          participants: event.participants,
          image: event.image,
          status: event.status,
        }
      : {}
  );

  if (!event) {
    return (
      <div className="empty-box">
        <h2>Event Not Found</h2>
        <Link to="/events">Back to Events</Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    onUpdateEvent({
      ...event,
      ...formData,
      maxParticipants: Number(formData.maxParticipants),
      participants: Number(formData.participants),
    });

    setIsEditing(false);
    alert("Event updated successfully!");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      onDeleteEvent(event.id);
      navigate("/events");
    }
  };

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Event Details</h1>
          <p>View and manage this event.</p>
        </div>

        <Link className="secondary-btn" to="/events">
          Back to Events
        </Link>
      </div>

      {isEditing ? (
        <form className="event-form" onSubmit={handleUpdate}>
          <label>Event Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Location</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            required
          />

          <label>Maximum Participants</label>
          <input
            type="number"
            name="maxParticipants"
            value={formData.maxParticipants}
            onChange={handleChange}
            required
          />

          <label>Participants</label>
          <input
            type="number"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            min="0"
            required
          />

          <label>Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
          />

          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <div className="button-row">
            <button className="primary-btn" type="submit">
              Save Changes
            </button>

            <button
              className="secondary-btn"
              type="button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="details-box">
          <img
            className="details-image"
            src={event.image}
            alt={event.name}
          />

          <div className="details-content">
            <span className={`status ${event.status.toLowerCase()}`}>
              {event.status}
            </span>

            <h2>{event.name}</h2>

            <p>
              <strong>Date:</strong> {event.date}
            </p>

            <p>
              <strong>Location:</strong> {event.location}
            </p>

            <p>
              <strong>Participants:</strong> {event.participants} /{" "}
              {event.maxParticipants}
            </p>

            <p>
              <strong>Description:</strong>
            </p>

            <p>{event.description}</p>

            <div className="button-row">
              <button
                className="primary-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>

              <button className="delete-btn" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDetails;