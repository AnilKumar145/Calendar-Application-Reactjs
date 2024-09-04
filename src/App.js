
import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import EventForm from './components/EventForm';
import './styles/app.css';

const App = () => {
  const [events, setEvents] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleAddEvent = (day, eventText) => {
    const updatedEvents = { ...events, [day]: eventText };
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setSelectedDay(null);
  };

  const handleDeleteEvent = (day) => {
    const updatedEvents = { ...events };
    delete updatedEvents[day];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  return (
    <div className="app">
      <h1>Simple Calendar</h1>
      <Calendar
        events={events}
        onDayClick={handleDayClick}
        onDeleteEvent={handleDeleteEvent}
      />
      {selectedDay && (
        <EventForm selectedDay={selectedDay} onAddEvent={handleAddEvent} />
      )}
    </div>
  );
};

export default App;
