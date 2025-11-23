import { motion } from 'framer-motion';

const SeasonalPlantingGuide = () => {
  const seasons = [
    {
      name: 'Spring',
      months: 'March - May',
      plants: ['Tomatoes', 'Peppers', 'Cucumbers', 'Lettuce'],
      color: 'bg-green-400',
      icon: '🌸',
    },
    {
      name: 'Summer',
      months: 'June - August',
      plants: ['Okra', 'Eggplant', 'Beans', 'Corn'],
      color: 'bg-yellow-400',
      icon: '☀️',
    },
    {
      name: 'Autumn',
      months: 'September - November',
      plants: ['Carrots', 'Beets', 'Spinach', 'Broccoli'],
      color: 'bg-orange-400',
      icon: '🍂',
    },
    {
      name: 'Winter',
      months: 'December - February',
      plants: ['Cabbage', 'Cauliflower', 'Peas', 'Radish'],
      color: 'bg-blue-400',
      icon: '❄️',
    },
  ];

  return (
    <section className="py-12 px-4 rounded-3xl   bg-theme-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
            Seasonal Planting Guide
          </h2>
          <p className="text-theme-secondary max-w-2xl mx-auto">
            Know what to plant and when. Follow our seasonal guide for the best gardening results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season, index) => (
            <motion.div
              key={season.name}
              className={`${season.color} rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-3">{season.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{season.name}</h3>
              <p className="text-sm opacity-90 mb-4">{season.months}</p>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Best Plants:</p>
                <ul className="space-y-1">
                  {season.plants.map((plant, idx) => (
                    <li key={idx} className="text-sm opacity-95">
                      • {plant}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalPlantingGuide;

