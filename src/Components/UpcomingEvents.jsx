import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/events.json')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🌼 Upcoming Events
        </motion.h2>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="border-b pb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-green-700">{event.title}</h3>
              <p className="text-gray-600">{event.date} — {event.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
