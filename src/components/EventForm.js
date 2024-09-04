import React, { useState } from 'react';
import '../styles/eventform.css';


const EventForm = ({ selectedDay, onAddEvent }) => {
  const [eventText, setEventText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventText) {
      onAddEvent(selectedDay, eventText);
      setEventText('');
    }
  };

  return (
    <div className="event-form">
      <h3>Add Event for {selectedDay}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={eventText}
          onChange={(e) => setEventText(e.target.value)}
          placeholder="Event description"
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;
