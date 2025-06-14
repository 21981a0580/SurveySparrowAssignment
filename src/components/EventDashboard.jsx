import React, { useState } from "react";
import dayjs from "dayjs";
import CalendarGrid from "./CalendarGrid"; // Make sure this exists and passes `events` properly
import EventList from "./EventList";
import AddEventModal from "./AddEventModal";

const EventDashboard = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleSaveEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setSelectedDate(null); // Close modal
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 p-6">
      {/* Calendar */}
      <div>
        <CalendarGrid
          date={dayjs()}
          events={events}
          onDateClick={handleDateClick}
        />
      </div>

      {/* Event List */}
      <div>
        <EventList events={events} />
      </div>

      {/* Modal for Adding Events */}
      {selectedDate && (
        <AddEventModal
          date={selectedDate}
          onClose={() => setSelectedDate(null)}
          onSave={handleSaveEvent}
        />
      )}
    </div>
  );
};

export default EventDashboard;
