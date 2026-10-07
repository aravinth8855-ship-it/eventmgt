import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import AddEvent from "./pages/AddEvent";
import EventDetails from "./pages/EventDetails";
import initialEvents from "./data/events";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");

    if (savedEvents) {
      return JSON.parse(savedEvents);
    }

    return initialEvents;
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const updateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent;
      }

      return event;
    });

    setEvents(updatedEvents);
  };

  const deleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);

    setEvents(updatedEvents);
  };

  if (!isLoggedIn) {
    return <Login onLogin={login} />;
  }

  return (
    <div className="app">
      <Navbar
        onLogout={logout}
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="main-layout">
        <Sidebar isOpen={isSidebarOpen} />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Dashboard events={events} />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard events={events} />}
            />

            <Route
              path="/events"
              element={<Events events={events} />}
            />

            <Route
              path="/add-event"
              element={<AddEvent onAddEvent={addEvent} />}
            />

            <Route
              path="/events/:id"
              element={
                <EventDetails
                  events={events}
                  onUpdateEvent={updateEvent}
                  onDeleteEvent={deleteEvent}
                />
              }
            />

            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
