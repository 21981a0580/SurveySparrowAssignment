import React, { useState } from "react";

const AddEventModal = ({ date, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [color, setColor] = useState("#93c5fd");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !startTime || !endTime) return;

    onSave({ title, startTime, endTime, color, date: date.format("YYYY-MM-DD") });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Add Event – {date.format("DD MMM YYYY")}</h2>

        <input type="text" placeholder="Title" value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border mb-2 p-2 rounded" required />

        <input type="time" value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="w-full border mb-2 p-2 rounded" required />

        <input type="time" value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="w-full border mb-4 p-2 rounded" required />

        <input type="color" value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full mb-4 h-10" />

        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
          <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEventModal;
