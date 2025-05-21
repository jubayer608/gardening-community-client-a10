import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TopTrendingTips = () => {
const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tips')
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
    <section className="py-12 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">🔥 Top Trending Tips</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow hover:shadow-lg p-5 text-left"
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-44 overflow-hidden rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-green-700">{tip.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{tip.plantType}</p>
              <span className="inline-block text-xs bg-green-200 text-green-800 px-2 py-1 rounded mb-2">
                {tip.category}
              </span>
              <p className="text-sm text-gray-700 mt-2">❤️ {tip.totalLiked || 0} Likes</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopTrendingTips;
