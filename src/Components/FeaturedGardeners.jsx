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
    <section className="py-12 px-4 rounded-3xl bg-theme-secondary font-sans">
      <div className="max-w-7xl  mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-6">
           Featured Gardeners
        </h2>
        <p className="text-theme-secondary mb-10 max-w-xl mx-auto">
          Meet some of our most active gardeners around Bangladesh sharing knowledge and growing greener communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {gardeners.map((gardener, index) => (
            <motion.div
              key={gardener._id}
              className="group bg-theme-primary border border-theme rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 relative overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Profile Image */}
                <div className="relative mx-auto w-32 h-32 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <img
                    src={gardener.image}
                    alt={gardener.name}
                    className="relative w-32 h-32 object-cover rounded-full border-4 border-primary-300 dark:border-primary-600 shadow-lg group-hover:border-primary-500 transition-colors"
                  />
                  {/* Active Badge */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-theme-primary flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Name and Location */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-theme-primary mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                    {gardener.name}
                  </h3>
                  <p className="text-theme-secondary text-sm mb-3 flex items-center justify-center gap-1">
                    <span>📍</span>
                    {gardener.location}
                  </p>
                  
                  {/* Active Status */}
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 shadow-md">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Active Gardener
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGardeners;
