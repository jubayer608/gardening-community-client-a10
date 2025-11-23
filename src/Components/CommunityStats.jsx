import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CommunityStats = () => {
  const [stats, setStats] = useState({
    totalTips: 0,
    totalGardeners: 0,
    totalLikes: 0,
    activeMembers: 0,
  });

  useEffect(() => {
    // Fetch stats from API
    Promise.all([
      fetch('https://gardening-community-server-flax.vercel.app/tips')
        .then((res) => res.json())
        .then((data) => ({ tips: data.length, likes: data.reduce((sum, tip) => sum + (tip.totalLiked || 0), 0) }))
        .catch(() => ({ tips: 0, likes: 0 })),
      fetch('https://gardening-community-server-flax.vercel.app/gardeners')
        .then((res) => res.json())
        .then((data) => ({ gardeners: data.length, active: data.filter((g) => g.status === 'active').length }))
        .catch(() => ({ gardeners: 0, active: 0 })),
    ]).then(([tipsData, gardenersData]) => {
      setStats({
        totalTips: tipsData.tips,
        totalGardeners: gardenersData.gardeners,
        totalLikes: tipsData.likes,
        activeMembers: gardenersData.active,
      });
    });
  }, []);

  const statItems = [
    {
      label: 'Total Tips',
      value: stats.totalTips,
      icon: '💡',
      color: 'from-green-500 to-emerald-600',
    },
    {
      label: 'Active Gardeners',
      value: stats.totalGardeners,
      icon: '👥',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      label: 'Total Likes',
      value: stats.totalLikes,
      icon: '❤️',
      color: 'from-pink-500 to-rose-600',
    },
    {
      label: 'Active Members',
      value: stats.activeMembers,
      icon: '🌟',
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  return (
    <section className="py-12 px-4 bg-theme-primary">
      <div className="max-w-8xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
            Our Growing Community
          </h2>
          <p className="text-theme-secondary max-w-2xl mx-auto">
            Join thousands of gardeners sharing knowledge and growing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((item, index) => (
            <motion.div
              key={item.label}
              className={`bg-gradient-to-br ${item.color} rounded-xl shadow-lg p-6 text-white text-center`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
              >
                {item.value.toLocaleString()}
              </motion.div>
              <p className="text-sm opacity-90">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;

