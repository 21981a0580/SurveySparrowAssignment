import React, { useState } from "react";
import dayjs from "dayjs";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import AddEventModal from "./AddEventModal";
import eventsData from "../data/events.json";
import EventList from "./EventList";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState(Array.isArray(eventsData) ? eventsData : []);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => setSelectedDate(date);
  const handleAddEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
    setSelectedDate(null);
  };

  const goPrev = () => setCurrentDate((d) => d.subtract(1, "month"));
  const goNext = () => setCurrentDate((d) => d.add(1, "month"));
  const changeYear = (year) => setCurrentDate((d) => d.year(year));

  return (
    <div className="max-w-5xl mx-auto p-6">
      <CalendarHeader date={currentDate} onPrev={goPrev} onNext={goNext} onYearChange={changeYear} />
      <div className="grid lg:grid-cols-2 gap-6">
        <CalendarGrid date={currentDate} events={events} onDateClick={handleDateClick} />
        <EventList events={events} />
      </div>
      {selectedDate && <AddEventModal date={selectedDate} onClose={() => setSelectedDate(null)} onSave={handleAddEvent} />}
    </div>
  );
};

export default Calendar;
