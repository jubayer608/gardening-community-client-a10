import { motion } from 'framer-motion';

const GardeningTips = () => {
  const tips = [
    {
      title: 'Use Organic Fertilizer',
      description: 'Compost and natural fertilizers enrich your soil and are eco-friendly.',
    },
    {
      title: 'Water Smartly',
      description: 'Water early in the morning or late afternoon to reduce evaporation.',
    },
    {
      title: 'Rotate Crops',
      description: 'Crop rotation prevents soil depletion and pest buildup.',
    },
  ];

  return (
    <section className="bg-theme-secondary py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           Gardening Tips
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className="bg-theme-primary border border-theme p-6 rounded-xl shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">{tip.title}</h3>
              <p className="text-theme-secondary">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GardeningTips;
