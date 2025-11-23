import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TopTrendingTips = () => {
const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('https://gardening-community-server-flax.vercel.app/tips')
      .then((res) => res.json())
      .then((data) => {
        const sortedTips = data
          .sort((a, b) => (b.totalLiked || 0) - (a.totalLiked || 0)) 
          .slice(0, 6); 
        setTips(sortedTips);
      })
      .catch((error) => console.error('Error fetching trending tips:', error));
  }, []);

  return (
    <section className="py-12 bg-theme-primary">
      <div className="max-w-8xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-8"> Top Trending Tips</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-theme-secondary border border-theme rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-600 text-white backdrop-blur-sm">
                    🔥 Trending
                  </span>
                </div>

                {/* Like Count Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <span className="text-red-400">❤️</span>
                  <span className="text-white text-sm font-semibold">{tip.totalLiked || 0}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-theme-primary line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                    {tip.title}
                  </h3>
                </div>
                
                <p className="text-sm text-theme-secondary mb-3 flex items-center gap-1">
                  <span className="text-primary-600 dark:text-primary-400">🌱</span>
                  {tip.plantType}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-block text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-full font-semibold">
                    {tip.category}
                  </span>
                  <span className="text-xs text-theme-tertiary">
                    {tip.difficulty}
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

export default TopTrendingTips;
