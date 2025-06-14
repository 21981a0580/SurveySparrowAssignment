import React from "react";
import holidays from "../data/holidays.json";

const PublicHolidays = () => {
  const sortedHolidays = [...holidays].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">🏖️ Public Holidays</h2>
      <ul className="space-y-3">
        {sortedHolidays.map((h, i) => (
          <li key={i} className="flex justify-between p-4 border rounded-lg bg-green-50">
            <span>{h.title}</span>
            <span>{h.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicHolidays;
