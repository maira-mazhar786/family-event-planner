import { useState, useEffect } from "react";
import EventCard from "./EventCard";

function Events() {
 const [events, setEvents] = useState(() => {
  const savedEvents = localStorage.getItem("events");

  return savedEvents
    ? JSON.parse(savedEvents)
    : [
        {
          id: 1,
          title: "Birthday Party",
          date: "15 July 2026",
          location: "Lahore",
        },
        {
          id: 2,
          title: "Family Reunion",
          date: "28 August 2026",
          location: "Islamabad",
        },
      ];
});

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  function addEvent(e) {
    e.preventDefault();

    if (!title || !date || !location) {
      alert("Please fill all fields");
      return;
    }

    const newEvent = {
      id: Date.now(),
      title,
      date,
      location,
    };

    setEvents([...events, newEvent]);

    setTitle("");
    setDate("");
    setLocation("");
  }

  function deleteEvent(id) {
    setEvents(events.filter((event) => event.id !== id));
  }
useEffect(() => {
  localStorage.setItem("events", JSON.stringify(events));
}, [events]);


  return (
    <section className="events">

      <h1>Upcoming Family Events</h1>

      <form className="event-form" onSubmit={addEvent}>

        <input
          type="text"
          placeholder="Event Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="submit">
          Add Event
        </button>

      </form>

      <div className="event-container">

        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            onDelete={() => deleteEvent(event.id)}
          />
        ))}

      </div>

    </section>
  );
}

export default Events;