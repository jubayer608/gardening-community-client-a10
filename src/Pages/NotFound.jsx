import { Link } from 'react-router';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-9xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-green-800 mb-4">
        Oops! Page not found.
      </h2>
      <p className="text-green-700 max-w-md mb-6">
        The page you are looking for doesn’t exist or has been moved. Let's get you back to the garden!
      </p>
      <Link 
        to="/" 
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300"
      >
        🌿 Go Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
