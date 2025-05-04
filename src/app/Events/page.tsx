import React from "react";

const EventsPage = () => {
  const events = [
    { id: 1, title: "Music Concert", date: "2023-11-15" },
    { id: 2, title: "Art Exhibition", date: "2023-11-20" },
    { id: 3, title: "Tech Conference", date: "2023-12-05" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Upcoming Events
        </h1>
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {event.title}
              </h2>
              <p className="text-gray-500">Date: {event.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventsPage;
