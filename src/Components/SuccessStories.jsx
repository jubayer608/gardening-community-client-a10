import { motion } from 'framer-motion';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Rashida Begum',
      location: 'Dhaka, Bangladesh',
      story: 'Started with just a few pots on my balcony. Now I have a thriving rooftop garden with 50+ plants!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      achievement: '50+ Plants',
      icon: '🏆',
    },
    {
      name: 'Karim Ahmed',
      location: 'Chittagong, Bangladesh',
      story: 'Learned organic farming through the community. My vegetable garden now feeds my entire family!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      achievement: 'Organic Expert',
      icon: '🌱',
    },
    {
      name: 'Fatima Khan',
      location: 'Sylhet, Bangladesh',
      story: 'From zero knowledge to sharing 20+ tips. This community changed my gardening journey completely!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      achievement: '20+ Tips Shared',
      icon: '💡',
    },
  ];

  return (
    <section className="py-12 rounded-3xl px-4 bg-theme-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
            Success Stories
          </h2>
          <p className="text-theme-secondary max-w-2xl mx-auto">
            Real stories from our community members who transformed their gardens with our help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="group bg-theme-primary border border-theme rounded-2xl shadow-lg hover:shadow-2xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Profile Section */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <img
                      src={story.image}
                      alt={story.name}
                      className="relative w-20 h-20 rounded-full object-cover border-4 border-primary-300 dark:border-primary-600 shadow-lg"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-bold text-theme-primary mb-1">{story.name}</h3>
                    <p className="text-sm text-theme-secondary flex items-center gap-1">
                      <span>📍</span>
                      {story.location}
                    </p>
                  </div>
                </div>

                {/* Story Quote */}
                <div className="mb-6">
                  <div className="text-4xl text-primary-600/20 dark:text-primary-400/20 mb-2">"</div>
                  <p className="text-theme-secondary leading-relaxed italic text-base pl-4 border-l-4 border-primary-500/30">
                    {story.story}
                  </p>
                  <div className="text-4xl text-primary-600/20 dark:text-primary-400/20 text-right mt-2">"</div>
                </div>

                {/* Achievement Badge */}
                <div className="flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-700 dark:to-primary-800 rounded-xl border-2 border-primary-400 dark:border-primary-500 shadow-lg">
                  <div className="flex-shrink-0">
                    <span className="text-4xl drop-shadow-md">{story.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white/90 uppercase tracking-wider mb-1">
                      Achievement
                    </p>
                    <p className="text-lg font-bold text-white break-words drop-shadow-sm">
                      {story.achievement}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

