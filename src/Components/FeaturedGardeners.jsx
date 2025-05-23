import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const FeaturedGardeners = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch('https://gardening-community-server-flax.vercel.app/gardeners/active')
      .then((res) => res.json())
      .then((data) => {
        setGardeners(data);
      })
      .catch((error) => console.error('Failed to fetch gardeners:', error));
  }, []);

  return (
    <section className="py-12 px-4 bg-green-50 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
           Featured Gardeners
        </h2>
        <p className="text-green-700 mb-10 max-w-xl mx-auto">
          Meet some of our most active gardeners around Bangladesh sharing knowledge and growing greener communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gardeners.map((gardener, index) => (
            <motion.div
              key={gardener._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                src={gardener.image}
                alt={gardener.name}
                className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-green-200"
              />
              <h3 className="mt-4 text-xl font-semibold text-green-900">{gardener.name}</h3>
              <p className="text-green-700 text-sm">{gardener.location}</p>
              <span className="inline-block mt-2 text-xs text-white bg-green-600 px-2 py-1 rounded">
                Active
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGardeners;
