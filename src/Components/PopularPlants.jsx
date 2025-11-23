import { motion } from 'framer-motion';
import { FaSun, FaTint, FaThermometerHalf, FaLeaf, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const PopularPlants = () => {
  const plants = [
    {
      id: 1,
      name: 'Tomato',
      scientificName: 'Solanum lycopersicum',
      image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&q=80',
      difficulty: 'Easy',
      season: 'Spring-Summer',
      water: 'Regular',
      sunlight: 'Full Sun',
      rating: 4.8,
      description: 'Perfect for beginners. High yield and easy to grow in containers.',
      color: 'from-red-500 to-orange-600',
      icon: '🍅',
    },
    {
      id: 2,
      name: 'Basil',
      scientificName: 'Ocimum basilicum',
      image: 'https://images.unsplash.com/photo-1618375569909-4c88547f98c3?w=800&h=600&fit=crop&q=80',
      difficulty: 'Easy',
      season: 'Year Round',
      water: 'Moderate',
      sunlight: 'Partial Sun',
      rating: 4.9,
      description: 'Aromatic herb perfect for cooking. Grows well indoors and outdoors.',
      color: 'from-green-500 to-emerald-600',
      icon: '🌿',
    },
    {
      id: 3,
      name: 'Marigold',
      scientificName: 'Tagetes',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
      difficulty: 'Easy',
      season: 'Spring-Fall',
      water: 'Moderate',
      sunlight: 'Full Sun',
      rating: 4.7,
      description: 'Bright flowers that repel pests naturally. Great companion plant.',
      color: 'from-yellow-500 to-orange-600',
      icon: '🌼',
    },
    {
      id: 4,
      name: 'Chili Pepper',
      scientificName: 'Capsicum annuum',
      image: 'https://images.unsplash.com/photo-1605215071598-47137179fab3?w=800&h=600&fit=crop&q=80',
      difficulty: 'Medium',
      season: 'Spring-Summer',
      water: 'Regular',
      sunlight: 'Full Sun',
      rating: 4.6,
      description: 'Spicy addition to your garden. Multiple varieties available.',
      color: 'from-red-600 to-pink-600',
      icon: '🌶️',
    },
    {
      id: 5,
      name: 'Spinach',
      scientificName: 'Spinacia oleracea',
      image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=800&q=80',
      difficulty: 'Easy',
      season: 'Cool Season',
      water: 'Regular',
      sunlight: 'Partial Sun',
      rating: 4.5,
      description: 'Nutrient-rich leafy green. Fast growing and harvestable multiple times.',
      color: 'from-green-600 to-teal-600',
      icon: '🥬',
    },
    {
      id: 6,
      name: 'Cucumber',
      scientificName: 'Cucumis sativus',
      image: 'https://images.unsplash.com/photo-1604977042236-8785b04cc0a4?w=800&h=600&fit=crop&q=80',
      difficulty: 'Medium',
      season: 'Spring-Summer',
      water: 'Regular',
      sunlight: 'Full Sun',
      rating: 4.7,
      description: 'Refreshing and productive. Great for vertical gardening.',
      color: 'from-green-400 to-cyan-600',
      icon: '🥒',
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300';
      case 'Medium':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300';
      case 'Hard':
        return 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section className="py-12 px-4 bg-theme-primary">
      <div className="max-w-8xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
            <FaLeaf className="text-4xl text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
            Popular Plants to Grow
          </h2>
          <p className="text-theme-secondary max-w-2xl mx-auto text-lg">
            Discover the most popular and easiest plants to grow in Bangladesh. Perfect for beginners!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-theme-secondary border border-theme rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-theme-tertiary flex-shrink-0">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Use SVG data URL as fallback
                    const svg = `
                      <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                        <rect width="600" height="400" fill="#10b981"/>
                        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${plant.name}</text>
                      </svg>
                    `.trim();
                    e.target.src = `data:image/svg+xml;base64,${btoa(svg)}`;
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${plant.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Plant Icon Badge */}
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {plant.icon}
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-white text-sm font-bold">{plant.rating}</span>
                  </div>
                </div>

                {/* Difficulty Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border-2 ${getDifficultyColor(plant.difficulty)}`}>
                    {plant.difficulty}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-theme-primary mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                    {plant.name}
                  </h3>
                  <p className="text-sm text-theme-tertiary italic">{plant.scientificName}</p>
                </div>

                <p className="text-theme-secondary mb-4 text-sm leading-relaxed line-clamp-2 flex-shrink-0">
                  {plant.description}
                </p>

                {/* Plant Info Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 flex-shrink-0">
                  <div className="flex items-center gap-2 text-xs text-theme-secondary">
                    <FaSun className="text-yellow-500" />
                    <span>{plant.sunlight}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-theme-secondary">
                    <FaTint className="text-blue-500" />
                    <span>{plant.water}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-theme-secondary">
                    <FaThermometerHalf className="text-orange-500" />
                    <span>{plant.season}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-theme-secondary">
                    <FaLeaf className="text-green-500" />
                    <span>{plant.difficulty}</span>
                  </div>
                </div>

                {/* View Details Button - Always at bottom */}
                <div className="mt-auto">
                  <Link
                    to="/browse-tips"
                    className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
                  >
                    View Growing Tips
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/browse-tips"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <FaLeaf />
            Explore All Plants
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularPlants;

