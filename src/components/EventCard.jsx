function EventCard({ title, date, location, onDelete }) {
  return (
    <div className="event-card">

      <h2>{title}</h2>

      <p>
        <strong>Date:</strong> {date}
      </p>

      <p>
        <strong>Location:</strong> {location}
      </p>

      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>

    </div>
  );
}

export default EventCard;