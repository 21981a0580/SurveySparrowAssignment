import React from "react";
import dayjs from "dayjs";
import EventBadge from "./EventBadge";

const DayCell = ({ day, events = [], onClick }) => {
  if (!day) return <div className="h-24 sm:h-28 bg-gray-50 rounded-xl border"></div>;

  const isToday = dayjs().isSame(day, "day");
  const dayEvents = events.filter((e) => dayjs(e.date).isSame(day, "day"));

  return (
    <div onClick={() => onClick(day)}
      className={`h-24 sm:h-28 p-2 rounded-xl border transition flex flex-col cursor-pointer
        ${isToday ? "bg-blue-50 border-blue-500 shadow-sm" : "bg-white border-gray-200 hover:bg-blue-100 hover:shadow"}`}
    >
      <div className={`text-sm font-bold mb-1 ${isToday ? "text-blue-600" : "text-gray-800"}`}>
        {day.date()}
      </div>
      <div className="flex flex-col gap-1 overflow-y-auto max-h-[60%] pr-1">
        {dayEvents.map((e, i) => <EventBadge key={i} title={e.title} color={e.color} />)}
      </div>
    </div>
  );
};

export default DayCell;
