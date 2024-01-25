import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    getCalendar();
  }, []);

  const getCalendar = async () => {
    try {
      const response = await fetch("http://localhost:1000/api/events");

      if (!response.ok) {
        throw new Error(`HTTP error! ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setEvents(result);
    } catch (error) {
      console.error("Error fetching calendar:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const selectedEvent = events.data.find(
      (event) => new Date(event.start).toDateString() === date.toDateString()
    );
    setSelectedEvent(selectedEvent);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="calendar-main-div">
      <Calendar
        className="calender-container"
        onChange={handleDateChange}
        events={events.data.map((event) => ({
          date: new Date(event.start),
          title: event.title,
          description: event.description,
          end: new Date(event.end),
        }))}
      />
      <h2 className="text-success">
        {selectedDate
          ? `Selected Date: ${selectedDate.toDateString()}`
          : "Select a date"}
      </h2>
      {selectedEvent && (
        <div>
          <h3 className="text-secondary">Title: {selectedEvent.title}</h3>
          <p className="text-primary font-weight-bold">
            Description: {selectedEvent.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
