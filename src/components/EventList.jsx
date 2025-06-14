import React from "react";
import dayjs from "dayjs";
import { FiEdit2 } from "react-icons/fi";

const EventList = ({ events = [] }) => {
  if (!Array.isArray(events)) {
    console.error("EventList expects an array:", events);
    return <p className="text-red-600">Failed to load events.</p>;
  }

  const sortedEvents = [...events].sort((a, b) =>
    dayjs(a.date).isAfter(b.date) ? 1 : -1
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📅 All Events</h2>
      {sortedEvents.length === 0 && <p className="text-gray-500">No events added.</p>}
      <div className="grid gap-4">
        {sortedEvents.map((e, idx) => {
          const dateObj = dayjs(e.date);
          return (
            <div key={idx} className="flex items-start justify-between bg-blue-50 hover:bg-blue-100 rounded-xl p-4 border">
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-white border text-blue-600 font-bold">
                <span className="text-xl">{dateObj.format("DD")}</span>
                <span className="text-xs uppercase">{dateObj.format("MMM")}</span>
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{e.title}</h3>
                <p className="text-sm text-gray-600">{dateObj.format("dddd, MMMM YYYY")}</p>
                <p className="text-sm text-gray-700 mt-1">🕒 {e.startTime} – {e.endTime}</p>
              </div>
              <button title="Edit Event" className="text-blue-600 hover:text-blue-800">
                <FiEdit2 size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventList;
