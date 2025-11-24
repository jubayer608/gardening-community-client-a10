import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaHeart, FaLightbulb, FaSeedling, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaLeaf className="text-4xl" />,
      title: 'Community Driven',
      description: 'Built by gardeners, for gardeners. Share knowledge and grow together.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Expert Network',
      description: 'Connect with experienced gardeners and learn from their wisdom.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: 'Passion for Gardening',
      description: 'A community that shares your love for plants and sustainable living.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Innovative Tips',
      description: 'Discover creative solutions and modern techniques for urban gardening.',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: <FaSeedling className="text-4xl" />,
      title: 'Beginner Friendly',
      description: 'Perfect for newcomers. Learn step by step with easy-to-follow guides.',
      color: 'from-teal-500 to-green-600',
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: 'Supportive Community',
      description: 'Get help when you need it. Our community is always ready to assist.',
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  const stats = [
    { number: '1000+', label: 'Active Members' },
    { number: '5000+', label: 'Garden Tips' },
    { number: '50+', label: 'Expert Gardeners' },
    { number: '100%', label: 'Free to Use' },
  ];

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
              <FaLeaf className="text-5xl text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-700 dark:text-primary-400 mb-6">
              About BaganBondhu
            </h1>
            <p className="text-xl md:text-2xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
              Your trusted companion in the journey of gardening. We're building a community where every gardener can thrive, learn, and share their passion for growing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-theme-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-theme-primary border border-theme rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-6 text-center">
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none text-theme-secondary text-center space-y-4">
              <p className="text-lg leading-relaxed">
                At <span className="font-bold text-primary-600 dark:text-primary-400">BaganBondhu</span>, we believe that everyone deserves access to fresh, homegrown produce and the joy that comes with nurturing plants. Our mission is to make gardening accessible, enjoyable, and sustainable for everyone, regardless of experience level.
              </p>
              <p className="text-lg leading-relaxed">
                We're creating a platform where knowledge flows freely, where beginners can learn from experts, and where experienced gardeners can share their wisdom. Together, we're growing not just plants, but a stronger, greener community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              Why Choose BaganBondhu?
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              Discover what makes our community special
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${feature.color} rounded-2xl shadow-xl p-6 text-white relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-theme-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              Our Community in Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-theme-primary border border-theme rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-theme-secondary font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 border-2 border-primary-200 dark:border-primary-700 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-4 text-theme-secondary text-lg leading-relaxed">
              <p>
                BaganBondhu was born from a simple observation: gardening knowledge was scattered, and beginners often felt overwhelmed. We envisioned a platform where gardening wisdom could be shared freely, where questions could be answered quickly, and where every gardener—from balcony growers to rooftop farmers—could find their place.
              </p>
              <p>
                Today, we're proud to be Bangladesh's growing gardening community, connecting thousands of passionate individuals who share tips, celebrate successes, and support each other through every season. Whether you're growing your first herb or managing a full garden, BaganBondhu is here to be your trusted companion.
              </p>
              <p className="font-semibold text-primary-700 dark:text-primary-400 text-center pt-4">
                Join us in making Bangladesh greener, one plant at a time! 🌿
              </p>
            </div>
          </motion.div>
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
              Ready to Start Your Gardening Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of gardeners sharing knowledge and growing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/share-tip"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition shadow-lg hover:shadow-xl"
              >
                Share Your First Tip
              </motion.a>
              <motion.a
                href="/browse-tips"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Explore Tips
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;


