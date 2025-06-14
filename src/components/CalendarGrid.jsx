import React from "react";
import dayjs from "dayjs";
import DayCell from "./DayCell";

const CalendarGrid = ({ date, events, onDateClick }) => {
  if (!dayjs.isDayjs(date)) {
    console.error("Invalid date passed to CalendarGrid:", date);
    return null;
  }

  const startOfMonth = date.startOf("month");
  const daysInMonth = date.daysInMonth();
  const startDay = startOfMonth.day();

  const cells = [...Array(startDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) =>
    dayjs(new Date(date.year(), date.month(), i + 1))
  )];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
      <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-500 border-b pb-2 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="uppercase">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {cells.map((day, idx) => (
          <DayCell key={idx} day={day} events={events} onClick={onDateClick} />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
