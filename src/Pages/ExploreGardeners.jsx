import React from 'react';
import { useLoaderData } from 'react-router';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUser, FaVenusMars, FaClock, FaLightbulb, FaQuoteLeft, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const ExploreGardeners = () => {
  const gardeners = useLoaderData();

  // Generate dummy WhatsApp number for each gardener
  const getWhatsAppNumber = (gardenerId, index) => {
    // Generate a unique dummy number based on index
    // Format: +8801XXXXXXXXX (Bangladesh format)
    const baseNumber = 1710000000;
    const uniqueNumber = baseNumber + (index * 12345);
    return `+880${uniqueNumber}`;
  };

  const openWhatsApp = (gardener, index) => {
    const phoneNumber = getWhatsAppNumber(gardener._id, index);
    const message = encodeURIComponent(`Hello ${gardener.name}! I found your profile on BaganBondhu and would like to connect with you about gardening.`);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 px-4 bg-theme-primary font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
            <FaUser className="text-4xl text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 dark:text-primary-400 mb-4">
            Explore Gardeners
          </h2>
          <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
            Connect with passionate gardeners from across Bangladesh. Learn, share, and grow together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {gardeners.map((gardener, index) => (
            <motion.div
              key={gardener._id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-theme-secondary border border-theme rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative flex flex-col"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col flex-1">
                {/* Profile Section */}
                <div className="flex flex-col items-center mb-6">
                  {/* Profile Image with Glow */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary-300 dark:border-primary-600 shadow-xl group-hover:border-primary-500 transition-all duration-300">
                      <img
                        src={gardener.image}
                        alt={gardener.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          const svg = `
                            <svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                              <rect width="128" height="128" fill="#10b981"/>
                              <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${gardener.name.charAt(0).toUpperCase()}</text>
                            </svg>
                          `.trim();
                          e.target.src = `data:image/svg+xml;base64,${btoa(svg)}`;
                        }}
                      />
                    </div>
                    
                    {/* Active Status Badge */}
                    {gardener.status === 'active' && (
                      <div className="absolute bottom-0 right-0 w-10 h-10 bg-green-500 rounded-full border-4 border-theme-secondary flex items-center justify-center shadow-lg">
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                    )}
                  </div>

                  {/* Name and Location */}
                  <h3 className="text-2xl font-bold text-theme-primary mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                    {gardener.name}
                  </h3>
                  <div className="flex items-center gap-2 text-theme-secondary mb-4">
                    <FaMapMarkerAlt className="text-primary-500" />
                    <span className="text-sm font-medium">{gardener.location}</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-theme-primary rounded-xl p-3 border border-theme">
                    <div className="flex items-center gap-2 mb-1">
                      <FaLightbulb className="text-yellow-500 text-sm" />
                      <span className="text-xs text-theme-tertiary font-medium">Tips</span>
                    </div>
                    <p className="text-xl font-bold text-primary-600 dark:text-primary-400">
                      {gardener.totalSharedTips || 0}
                    </p>
                  </div>
                  
                  <div className="bg-theme-primary rounded-xl p-3 border border-theme">
                    <div className="flex items-center gap-2 mb-1">
                      <FaClock className="text-blue-500 text-sm" />
                      <span className="text-xs text-theme-tertiary font-medium">Experience</span>
                    </div>
                    <p className="text-xl font-bold text-primary-600 dark:text-primary-400">
                      {gardener.experience || 'N/A'}
                    </p>
                  </div>
                </div>

                {/* Info Section */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-primary-600 dark:text-primary-400 text-xs" />
                    </div>
                    <div className="flex-1">
                      <span className="text-theme-tertiary text-xs">Age</span>
                      <p className="text-theme-primary font-semibold">{gardener.age || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                      <FaVenusMars className="text-primary-600 dark:text-primary-400 text-xs" />
                    </div>
                    <div className="flex-1">
                      <span className="text-theme-tertiary text-xs">Gender</span>
                      <p className="text-theme-primary font-semibold capitalize">{gardener.gender || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                      <FaWhatsapp className="text-green-600 dark:text-green-400 text-xs" />
                    </div>
                    <div className="flex-1">
                      <span className="text-theme-tertiary text-xs">WhatsApp</span>
                      <p className="text-theme-primary font-semibold text-xs">{getWhatsAppNumber(gardener._id, index)}</p>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mb-6">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                    gardener.status === 'active' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}>
                    {gardener.status === 'active' && (
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                    {gardener.status || 'inactive'}
                  </span>
                </div>

                {/* Bio Section */}
                {gardener.bio && (
                  <div className="bg-theme-primary rounded-xl p-4 border border-theme mb-6 flex-shrink-0">
                    <div className="flex items-start gap-2">
                      <FaQuoteLeft className="text-primary-500 text-lg mt-1 flex-shrink-0" />
                      <p className="text-theme-secondary text-sm leading-relaxed italic line-clamp-3">
                        {gardener.bio}
                      </p>
                    </div>
                  </div>
                )}

                {/* Contact via WhatsApp Button - Always at bottom */}
                <div className="mt-auto pt-4">
                  <button
                    onClick={() => openWhatsApp(gardener, index)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Contact via WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreGardeners;
