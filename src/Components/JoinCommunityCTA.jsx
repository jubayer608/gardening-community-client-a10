import { motion } from 'framer-motion';
import { Link } from 'react-router';

const JoinCommunityCTA = () => {
  return (
    <section className="py-16 px-4 rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800">
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Share your gardening knowledge, learn from experts, and grow together with thousands of gardeners across Bangladesh.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/auth/register"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Free
            </Link>
            <Link
              to="/browse-tips"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Tips
            </Link>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-semibold mb-1">Learn & Grow</h3>
              <p className="text-sm opacity-90">Access expert tips and guides</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-semibold mb-1">Connect</h3>
              <p className="text-sm opacity-90">Join a community of gardeners</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-semibold mb-1">Share</h3>
              <p className="text-sm opacity-90">Share your gardening wisdom</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCommunityCTA;

