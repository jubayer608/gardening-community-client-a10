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
    <section className="py-12 px-4 bg-theme-primary font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary-700 dark:text-primary-400 mb-10 text-center">
          🌱 Explore Gardeners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {gardeners.map((gardener, index) => (
            <motion.div
              key={gardener._id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-theme-secondary border border-theme rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-300 dark:border-primary-600 shadow-sm mb-4">
                <img
                  src={gardener.image}
                  alt={gardener.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold text-theme-primary">{gardener.name}</h3>
              <p className="text-theme-secondary text-sm mb-2">{gardener.location}</p>

              <div className="text-sm text-theme-secondary space-y-1 mt-2">
                <p><span className="font-medium text-theme-primary">Age:</span> {gardener.age}</p>
                <p><span className="font-medium text-theme-primary">Gender:</span> {gardener.gender}</p>
                <p>
                  <span className="font-medium text-theme-primary">Status:</span>{' '}
                  <span className={`px-2 py-1 text-white rounded-full text-xs ${
                    gardener.status === 'active' ? 'bg-primary-600' : 'bg-gray-500'
                  }`}>
                    {gardener.status}
                  </span>
                </p>
                <p><span className="font-medium text-theme-primary">Experience:</span> {gardener.experience}</p>
                <p><span className="font-medium text-theme-primary">Tips Shared:</span> {gardener.totalSharedTips}</p>
                <p><span className="font-medium text-theme-primary">Bio:</span> {gardener.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreGardeners;
