import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Calendar from './components/Calendar';
import EventList from './components/EventList';
import PublicHolidays from './components/PublicHolidays';
import Festivals from './components/Festivals';
import EventDashboard from './components/EventDashboard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderNav />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/dashboard" element={<EventDashboard />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/holidays" element={<PublicHolidays />} />
          <Route path="/festivals" element={<Festivals />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
