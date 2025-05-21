import React from 'react';
import { useLoaderData } from 'react-router';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ExploreGardeners = () => {
  const gardeners = useLoaderData();

  return (
    <section className="py-12 px-4 bg-green-50 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">
          🌱 Explore Gardeners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {gardeners.map((gardener, index) => (
            <motion.div
              key={gardener.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-green-100"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-300 shadow-sm mb-4">
                <img
                  src={gardener.image}
                  alt={gardener.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold text-green-900">{gardener.name}</h3>
              <p className="text-green-700 text-sm mb-2">{gardener.location}</p>

              <div className="text-sm text-gray-700 space-y-1 mt-2">
                <p><span className="font-medium">Age:</span> {gardener.age}</p>
                <p><span className="font-medium">Gender:</span> {gardener.gender}</p>
                <p>
                  <span className="font-medium">Status:</span>{' '}
                  <span className={`px-2 py-1 text-white rounded text-xs ${
                    gardener.status === 'active' ? 'bg-green-600' : 'bg-gray-500'
                  }`}>
                    {gardener.status}
                  </span>
                </p>
                <p><span className="font-medium">Experience:</span> {gardener.experience}</p>
                <p><span className="font-medium">Tips Shared:</span> {gardener.totalSharedTips}</p>
                <p><span className="font-medium">Bio:</span> {gardener.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreGardeners;
