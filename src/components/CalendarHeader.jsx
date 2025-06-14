import React from "react";

const CalendarHeader = ({ date, onPrev, onNext, onYearChange }) => (
  <div className="flex justify-between items-center mb-6">
    <button onClick={onPrev} className="text-2xl">⬅️</button>
    <h2 className="text-2xl font-semibold">{date.format("MMMM YYYY")}</h2>
    <div className="flex items-center space-x-2">
      <button onClick={onNext} className="text-2xl">➡️</button>
      <input type="number" value={date.year()} onChange={(e) => onYearChange(Number(e.target.value))}
        className="border rounded px-2 py-1 w-20 text-right" />
    </div>
  </div>
);

export default CalendarHeader;
