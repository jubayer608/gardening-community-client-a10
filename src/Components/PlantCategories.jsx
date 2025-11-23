import { motion } from 'framer-motion';
import { Link } from 'react-router';

const PlantCategories = () => {
  const categories = [
    {
      name: 'Vegetables',
      description: 'Grow your own fresh vegetables',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400',
      color: 'from-green-500 to-emerald-600',
      link: '/browse-tips?category=vegetables',
    },
    {
      name: 'Flowers',
      description: 'Beautiful blooms for your garden',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400',
      color: 'from-pink-500 to-rose-600',
      link: '/browse-tips?category=flowers',
    },
    {
      name: 'Herbs',
      description: 'Fresh herbs for cooking',
      image: 'https://images.unsplash.com/photo-1618375569909-4c88547f98c3?w=400',
      color: 'from-yellow-500 to-orange-600',
      link: '/browse-tips?category=herbs',
    },
    {
      name: 'Fruits',
      description: 'Homegrown fruits and berries',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400',
      color: 'from-purple-500 to-indigo-600',
      link: '/browse-tips?category=fruits',
    },
    {
      name: 'Indoor Plants',
      description: 'Perfect for small spaces',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400',
      color: 'from-teal-500 to-cyan-600',
      link: '/browse-tips?category=indoor',
    },
    {
      name: 'Trees & Shrubs',
      description: 'Long-term garden investments',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400',
      color: 'from-amber-500 to-yellow-600',
      link: '/browse-tips?category=trees',
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
            Explore Plant Categories
          </h2>
          <p className="text-theme-secondary max-w-2xl mx-auto">
            Discover tips and guides for different types of plants in your garden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <div className="mb-3">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">{category.name}</h3>
                  <p className="text-sm md:text-base opacity-95 drop-shadow-md">{category.description}</p>
                </div>
                <Link
                  to={category.link}
                  className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-primary-700 px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Explore
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCategories;

