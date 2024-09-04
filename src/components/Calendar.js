import React, { useState, useEffect } from 'react';
import '../styles/calendar.css';

const Calendar = ({ events, onDayClick, onDeleteEvent }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push('');
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setDays(daysArray);
  }, []);

  return (
    <div className="calendar">
      {days.map((day, index) => (
        <div
          key={index}
          className={`day ${events[day] ? 'has-event' : ''}`}
          onClick={() => day && onDayClick(day)}
        >
          {day}
          {events[day] && (
            <div className="event-details">
              <div className="event-description">{events[day]}</div>
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering onDayClick
                  onDeleteEvent(day);
                }}
              >
                ❌
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
