import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaArrowRight, FaLeaf, FaSeedling, FaBook } from 'react-icons/fa';
import { Link } from 'react-router';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Tips for Urban Gardening Success',
      excerpt: 'Discover the secrets to thriving gardens in small spaces. Learn how to maximize your balcony or rooftop for a bountiful harvest.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
      category: 'Urban Gardening',
      date: 'March 15, 2024',
      author: 'Gardening Expert',
      readTime: '5 min read',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 2,
      title: 'Organic Composting: Turn Waste into Gold',
      excerpt: 'Transform your kitchen scraps into nutrient-rich compost. A complete guide to organic composting for beginners.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
      category: 'Composting',
      date: 'March 10, 2024',
      author: 'Eco Warrior',
      readTime: '7 min read',
      color: 'from-brown-500 to-amber-600',
    },
    {
      id: 3,
      title: 'Seasonal Planting Guide for Bangladesh',
      excerpt: 'Know what to plant and when. A comprehensive guide to seasonal planting that works perfectly in Bangladesh climate.',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800',
      category: 'Seasonal Guide',
      date: 'March 5, 2024',
      author: 'Local Expert',
      readTime: '6 min read',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 4,
      title: 'Vertical Gardening: Maximize Your Space',
      excerpt: 'Grow more in less space with vertical gardening techniques. Perfect for apartments and small homes.',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800',
      category: 'Vertical Gardening',
      date: 'February 28, 2024',
      author: 'Space Saver',
      readTime: '4 min read',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 5,
      title: 'Pest Control: Natural Solutions That Work',
      excerpt: 'Keep your plants healthy without harmful chemicals. Learn natural pest control methods that are safe and effective.',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800',
      category: 'Pest Control',
      date: 'February 20, 2024',
      author: 'Organic Gardener',
      readTime: '8 min read',
      color: 'from-red-500 to-orange-600',
    },
    {
      id: 6,
      title: 'Herb Gardening: Fresh Flavors at Your Fingertips',
      excerpt: 'Start your herb garden today! Learn which herbs grow best in Bangladesh and how to care for them.',
      image: 'https://images.unsplash.com/photo-1618375569909-4c88547f98c3?w=800',
      category: 'Herbs',
      date: 'February 15, 2024',
      author: 'Chef Gardener',
      readTime: '5 min read',
      color: 'from-teal-500 to-green-600',
    },
  ];

  const categories = ['All', 'Urban Gardening', 'Composting', 'Seasonal Guide', 'Vertical Gardening', 'Pest Control', 'Herbs'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-theme-primary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
              <FaBook className="text-5xl text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-700 dark:text-primary-400 mb-6">
              Gardening Blog
            </h1>
            <p className="text-xl md:text-2xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
              Expert tips, guides, and stories to help you grow your best garden ever
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-theme-secondary border-y border-theme">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-theme-primary text-theme-secondary hover:bg-theme-tertiary border border-theme'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-theme-secondary border border-theme rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${post.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-primary-700">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-theme-primary mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                    {post.title}
                  </h3>
                  
                  <p className="text-theme-secondary mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-theme-tertiary mb-4 pb-4 border-b border-theme">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-primary-600 dark:text-primary-400" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser className="text-primary-600 dark:text-primary-400" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-theme-secondary">{post.readTime}</span>
                    <button className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all group">
                      Read More
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Share Your Gardening Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community and start sharing your gardening tips today!
            </p>
            <Link
              to="/auth/register"
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition shadow-lg hover:shadow-xl"
            >
              <FaSeedling />
              Join BaganBondhu
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

