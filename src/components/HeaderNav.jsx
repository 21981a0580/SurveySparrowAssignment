import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  const navStyle = ({ isActive }) =>
    isActive ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-500";

  return (
    <nav className="bg-white p-4 shadow-md mb-6">
      <div className="max-w-5xl mx-auto flex space-x-6">
        <NavLink to="/" className={navStyle}>Calendar</NavLink>
        <NavLink to="/festivals" className={navStyle}>Festivals</NavLink>
        <NavLink to="/holidays" className={navStyle}>Public Holidays</NavLink>
      </div>
    </nav>
  );
};

export default HeaderNav;