import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedin,
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaLeaf,
  FaArrowRight,
  FaHeart,
  FaSeedling,
  FaBook,
  FaQuestionCircle,
  FaShieldAlt,
  FaLock,
  FaFileContract
} from 'react-icons/fa';
import Swal from 'sweetalert2';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Subscribed successfully!",
        text: "You'll receive our latest gardening tips.",
        showConfirmButton: false,
        timer: 2000,
      });
      setEmail('');
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Tips', path: '/browse-tips' },
    { name: 'Explore Gardeners', path: '/gardeners' },
    { name: 'Share a Tip', path: '/share-tip' },
  ];

  const resources = [
    { name: 'Gardening Guide', icon: <FaBook />, path: '/blog' },
    { name: 'Plant Care Tips', icon: <FaSeedling />, path: '/browse-tips' },
    { name: 'Community Forum', icon: <FaLeaf />, path: '/gardeners' },
    { name: 'Help Center', icon: <FaQuestionCircle />, path: '/support' },
  ];

  const legal = [
    { name: 'Terms of Service', icon: <FaFileContract />, path: '/terms' },
    { name: 'Privacy Policy', icon: <FaShieldAlt />, path: '/privacy' },
    { name: 'Cookie Policy', icon: <FaLock />, path: '/cookies' },
  ];

  return (
    <footer className="bg-gradient-to-b from-theme-secondary to-theme-tertiary border-t-2 border-primary-500/20 text-theme-primary mt-16">
      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <FaLeaf className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                BaganBondhu
              </h3>
            </div>
            <p className="text-theme-secondary mb-4 leading-relaxed">
              Your trusted companion in the journey of gardening. Growing together, one plant at a time.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center text-white transition transform hover:scale-110 shadow-lg"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center text-white transition transform hover:scale-110 shadow-lg"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition transform hover:scale-110 shadow-lg"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition transform hover:scale-110 shadow-lg"
              >
                <FaYoutube />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition transform hover:scale-110 shadow-lg"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4 flex items-center gap-2">
              <FaLeaf className="text-sm" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-theme-secondary hover:text-primary-600 dark:hover:text-primary-400 transition flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4 flex items-center gap-2">
              <FaBook className="text-sm" />
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.path}
                    className="text-theme-secondary hover:text-primary-600 dark:hover:text-primary-400 transition flex items-center gap-2 group"
                  >
                    <span className="text-primary-600 dark:text-primary-400">{resource.icon}</span>
                    <span>{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4 flex items-center gap-2">
              <FaEnvelope className="text-sm" />
              Stay Updated
            </h4>
            
            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <p className="text-sm text-theme-secondary mb-3">
                Subscribe to get gardening tips delivered to your inbox
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-theme-primary border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary placeholder:text-theme-tertiary text-sm"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition shadow-lg hover:shadow-xl"
                >
                  <FaArrowRight />
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-theme-secondary">
                <FaEnvelope className="text-primary-600 dark:text-primary-400" />
                <a href="mailto:BaganBondhu@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition">
                  BaganBondhu@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-theme-secondary">
                <FaPhone className="text-primary-600 dark:text-primary-400" />
                <a href="tel:+8801234567890" className="hover:text-primary-600 dark:hover:text-primary-400 transition">
                  +880 1234 567 890
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-theme-secondary">
                <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legal Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-theme"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm text-theme-secondary hover:text-primary-600 dark:hover:text-primary-400 transition flex items-center gap-2"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="text-sm text-theme-secondary text-center md:text-right">
              <p className="flex items-center justify-center md:justify-end gap-2">
                Made with <FaHeart className="text-red-500 animate-pulse" /> for Gardeners
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-theme-tertiary border-t border-theme py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-sm text-theme-secondary">
              © {new Date().getFullYear()} <span className="font-bold text-primary-600 dark:text-primary-400">BaganBondhu</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-theme-secondary">
              <FaSeedling className="text-primary-600 dark:text-primary-400" />
              <span>Growing Bangladesh, One Garden at a Time</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
