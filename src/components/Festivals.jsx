import React from "react";
import festivals from "../data/festivals.json";

const Festivals = () => {
  const sortedFestivals = [...festivals].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">🎉 Upcoming Festivals</h2>
      <ul className="space-y-3">
        {sortedFestivals.map((f, i) => (
          <li key={i} className="flex justify-between p-4 border rounded-lg bg-blue-50">
            <span>{f.title}</span>
            <span>{f.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Festivals;