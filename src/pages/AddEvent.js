import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEvent({ onAddEvent }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    maxParticipants: "",
    image: "",
    status: "Upcoming",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: Date.now(),
      name: formData.name,
      date: formData.date,
      location: formData.location,
      description: formData.description,
      maxParticipants: Number(formData.maxParticipants),
      participants: 0,
      image:
        formData.image ||
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      status: formData.status,
    };

    onAddEvent(newEvent);

    alert("Event added successfully!");

    navigate("/events");
  };

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Add Event</h1>
          <p>Create a new college event.</p>
        </div>
      </div>

      <form className="event-form" onSubmit={handleSubmit}>
        <label>Event Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter event name"
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
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter location"
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter event description"
          rows="5"
          required
        />

        <label>Maximum Participants</label>
        <input
          type="number"
          name="maxParticipants"
          value={formData.maxParticipants}
          onChange={handleChange}
          placeholder="Enter maximum participants"
          min="1"
          required
        />

        <label>Event Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Paste image URL"
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

        <button className="primary-btn" type="submit">
          Add Event
        </button>
      </form>
    </div>
  );
}

export default AddEvent;
