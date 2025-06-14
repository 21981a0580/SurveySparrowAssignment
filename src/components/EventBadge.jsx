import React from "react";

const EventBadge = ({ title, color = "#93c5fd" }) => (
  <div className="text-xs px-2 py-1 rounded truncate" style={{ backgroundColor: color, color: "#fff" }}>
    {title}
  </div>
);

export default EventBadge;
