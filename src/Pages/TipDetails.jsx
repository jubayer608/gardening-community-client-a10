import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaUser, FaEnvelope, FaLeaf, FaTag, FaChartLine, FaArrowLeft } from "react-icons/fa";
import Loading from "./Loading";

const TipDetails = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  
  useEffect(() => {
    fetch(`https://gardening-community-server-flax.vercel.app/tips/${id}`)
      .then(res => res.json())
      .then(data => setTip(data));
  }, [id]);

  const handleLike = () => {
    if (isLiked) return;
    
    fetch(`https://gardening-community-server-flax.vercel.app/tips/like/${id}`, {
      method: "PATCH",
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setIsLiked(true);
          setTip(prev => ({
            ...prev,
            totalLiked: (prev.totalLiked || 0) + 1,
          }));
        }
      });
  };

  if (!tip) return (
    <div className="min-h-screen flex items-center justify-center bg-theme-primary">
      <Loading></Loading>
    </div>
  );

  const difficultyColors = {
    Easy: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    Medium: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
    Hard: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
  };

  return (
    <div className="min-h-screen bg-theme-primary py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to="/browse-tips"
            className="inline-flex items-center gap-2 text-theme-primary hover:text-primary-600 dark:hover:text-primary-400 transition font-medium"
          >
            <FaArrowLeft />
            Back to Tips
          </Link>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl mb-8"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Floating Badges */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-3">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md bg-white/20 text-white border border-white/30 ${difficultyColors[tip.difficulty]}`}>
                {tip.difficulty}
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md bg-white/20 text-white border border-white/30">
                <FaTag className="inline mr-1" />
                {tip.category}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-theme-secondary border border-theme rounded-2xl shadow-xl p-6 md:p-8"
            >
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4 leading-tight">
                {tip.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-theme">
                <div className="flex items-center gap-2 text-theme-secondary">
                  <FaLeaf className="text-primary-600 dark:text-primary-400" />
                  <span className="font-medium">{tip.plantType}</span>
                </div>
                <div className="flex items-center gap-2 text-theme-secondary">
                  <FaTag className="text-primary-600 dark:text-primary-400" />
                  <span>{tip.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaChartLine className="text-primary-600 dark:text-primary-400" />
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${difficultyColors[tip.difficulty]}`}>
                    {tip.difficulty} Level
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-theme-secondary leading-relaxed text-lg mb-6">
                  {tip.description}
                </p>
              </div>

              {/* Like Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLike}
                disabled={isLiked}
                className={`w-full md:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-3 ${
                  isLiked
                    ? 'bg-primary-600 text-white cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                <FaHeart className={`text-xl ${isLiked ? 'text-red-400' : ''}`} />
                <span>
                  {isLiked ? 'Liked' : 'Like'} ({tip.totalLiked || 0})
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-theme-secondary border border-theme rounded-2xl shadow-xl p-6 sticky top-24"
            >
              <h3 className="text-xl font-bold text-theme-primary mb-6 flex items-center gap-2">
                <FaUser className="text-primary-600 dark:text-primary-400" />
                Shared By
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl">
                    {tip.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <p className="font-semibold text-theme-primary">{tip.name || 'Anonymous'}</p>
                    <div className="flex items-center gap-2 text-sm text-theme-secondary mt-1">
                      <FaEnvelope className="text-xs" />
                      <span className="truncate max-w-[200px]">{tip.email}</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-4 border-t border-theme space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-theme-secondary">Likes</span>
                    <span className="font-bold text-primary-600 dark:text-primary-400">
                      {tip.totalLiked || 0}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-theme-secondary">Category</span>
                    <span className="font-semibold text-theme-primary">{tip.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-theme-secondary">Difficulty</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[tip.difficulty]}`}>
                      {tip.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
