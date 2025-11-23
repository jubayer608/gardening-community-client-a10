import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickTipsCarousel = () => {
  const tips = [
    {
      tip: 'Water your plants early in the morning for best absorption',
      icon: '💧',
    },
    {
      tip: 'Use coffee grounds as natural fertilizer for acid-loving plants',
      icon: '☕',
    },
    {
      tip: 'Rotate your indoor plants weekly for even growth',
      icon: '🔄',
    },
    {
      tip: 'Prune dead leaves regularly to encourage new growth',
      icon: '✂️',
    },
    {
      tip: 'Mulch around plants to retain moisture and prevent weeds',
      icon: '🍂',
    },
    {
      tip: 'Check soil moisture with your finger before watering',
      icon: '👆',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tips.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [tips.length]);

  return (
    <section className="py-12 px-4 bg-theme-primary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
            Quick Gardening Tips
          </h2>
          <p className="text-theme-secondary">
            Handy tips to help you grow better every day
          </p>
        </motion.div>

        <div className="relative bg-theme-secondary border border-theme rounded-xl shadow-lg p-8 min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">{tips[currentIndex].icon}</div>
              <p className="text-xl md:text-2xl text-theme-primary font-semibold">
                {tips[currentIndex].tip}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {tips.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-primary-300 dark:bg-primary-700'
                }`}
                aria-label={`Go to tip ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + tips.length) % tips.length)
            }
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
          >
            ← Previous
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % tips.length)}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickTipsCarousel;

