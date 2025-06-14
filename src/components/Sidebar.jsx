import dayjs from 'dayjs';

const Sidebar = ({ events }) => {
  const sorted = [...events].sort((a, b) => dayjs(a.date) - dayjs(b.date));

  return (
    <div className="w-64 bg-white p-4 shadow-md overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4">📋 All Events</h3>
      <ul className="space-y-2">
        {sorted.map((e, i) => (
          <li key={i} className="text-sm border-b pb-1">
            <strong>{dayjs(e.date).format("DD MMM")}</strong>: {e.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
