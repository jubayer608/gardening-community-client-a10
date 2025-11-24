import { motion } from 'framer-motion';
import { FaHeart, FaEye, FaShare, FaLeaf, FaSeedling } from 'react-icons/fa';
import { Link } from 'react-router';

const GardenInspiration = () => {
  const inspirations = [
    {
      id: 1,
      title: 'Rooftop Vegetable Garden',
      description: 'Transform your rooftop into a productive vegetable garden. Perfect for urban dwellers!',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
      category: 'Urban Gardening',
      likes: 245,
      views: 1200,
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 2,
      title: 'Balcony Herb Paradise',
      description: 'Create a fragrant herb garden in your balcony. Fresh herbs at your fingertips!',
      image: 'https://images.unsplash.com/photo-1618375569909-4c88547f98c3?w=800',
      category: 'Herbs',
      likes: 189,
      views: 890,
      color: 'from-teal-500 to-cyan-600',
    },
    {
      id: 3,
      title: 'Vertical Flower Wall',
      description: 'Beautiful vertical flower arrangements that save space and add color to your home.',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
      category: 'Flowers',
      likes: 312,
      views: 1500,
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 4,
      title: 'Indoor Plant Collection',
      description: 'Curate a stunning indoor plant collection that purifies air and beautifies your space.',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800',
      category: 'Indoor Plants',
      likes: 278,
      views: 1100,
      color: 'from-purple-500 to-indigo-600',
    },
    {
      id: 5,
      title: 'Composting Setup',
      description: 'Learn to create rich compost from kitchen waste. Sustainable and eco-friendly!',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
      category: 'Composting',
      likes: 156,
      views: 750,
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 6,
      title: 'Seasonal Garden Planning',
      description: 'Plan your garden according to seasons for year-round harvest and beauty.',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800',
      category: 'Planning',
      likes: 201,
      views: 980,
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  return (
    <section className="py-12 px-4 bg-theme-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
            <FaSeedling className="text-4xl text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
            Garden Inspiration
          </h2>
          <p className="text-theme-secondary max-w-2xl mx-auto text-lg">
            Get inspired by beautiful gardens and creative gardening ideas from our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-theme-primary border border-theme rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-primary-700 shadow-lg">
                    {item.category}
                  </span>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-3 py-2 rounded-full">
                    <div className="flex items-center gap-1.5 text-white">
                      <FaHeart className="text-red-400" />
                      <span className="text-sm font-semibold">{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white">
                      <FaEye className="text-blue-300" />
                      <span className="text-sm font-semibold">{item.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-theme-primary mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                  {item.title}
                </h3>
                <p className="text-theme-secondary mb-4 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Action Button */}
                <Link
                  to="/browse-tips"
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all group"
                >
                  <span>Explore More</span>
                  <FaShare className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/browse-tips"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <FaLeaf />
            View All Inspirations
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GardenInspiration;


