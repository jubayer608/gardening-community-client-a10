import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaSearch, FaFilter, FaHeart, FaLeaf, FaTag, FaChartLine, FaEye } from "react-icons/fa";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [filteredTips, setFilteredTips] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const res = await fetch("https://gardening-community-server-flax.vercel.app/tips");
        const data = await res.json();
        setTips(data);
        setFilteredTips(data);
      } catch (error) {
        console.error("Error fetching tips:", error);
      }
    };

    fetchTips();
  }, []);

  useEffect(() => {
    let filtered = [...tips];

    // Filter by difficulty
    if (difficulty) {
      filtered = filtered.filter(tip => tip.difficulty === difficulty);
    }

    // Filter by category
    if (category) {
      filtered = filtered.filter(tip => tip.category === category);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(tip =>
        tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tip.plantType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tip.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTips(filtered);
  }, [difficulty, category, searchQuery, tips]);

  const categories = [...new Set(tips.map(tip => tip.category))];
  const difficultyColors = {
    Easy: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700',
    Medium: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700',
    Hard: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700',
  };

  return (
    <section className="min-h-screen bg-theme-primary py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <FaLeaf className="text-4xl text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-700 dark:text-primary-400 mb-4">
            Browse Garden Tips
          </h1>
          <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
            Discover amazing gardening tips from our community. Filter, search, and explore!
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-theme-secondary border border-theme rounded-2xl shadow-xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-theme-tertiary" />
              <input
                type="text"
                placeholder="Search tips, plants, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-theme-primary border border-theme rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary placeholder:text-theme-tertiary"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-theme-tertiary" />
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="pl-12 pr-10 py-3 bg-theme-primary border border-theme rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary appearance-none cursor-pointer"
              >
                <option value="">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <FaTag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-theme-tertiary" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="pl-12 pr-10 py-3 bg-theme-primary border border-theme rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary appearance-none cursor-pointer"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(difficulty || category || searchQuery) && (
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="text-sm text-theme-secondary">Active filters:</span>
              {searchQuery && (
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  Search: {searchQuery}
                  <button onClick={() => setSearchQuery("")} className="ml-2 hover:text-primary-900">×</button>
                </span>
              )}
              {difficulty && (
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  {difficulty}
                  <button onClick={() => setDifficulty("")} className="ml-2 hover:text-primary-900">×</button>
                </span>
              )}
              {category && (
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  {category}
                  <button onClick={() => setCategory("")} className="ml-2 hover:text-primary-900">×</button>
                </span>
              )}
            </div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-theme-secondary">
            Showing <span className="font-bold text-primary-600 dark:text-primary-400">{filteredTips.length}</span> of <span className="font-bold text-primary-600 dark:text-primary-400">{tips.length}</span> tips
          </p>
        </div>

        {/* Tips Grid */}
        {filteredTips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTips.map((tip, index) => (
              <motion.div
                key={tip._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-theme-secondary border border-theme rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 backdrop-blur-md ${difficultyColors[tip.difficulty]}`}>
                      {tip.difficulty}
                    </span>
                  </div>

                  {/* Like Count */}
                  {tip.totalLiked > 0 && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <FaHeart className="text-red-400 text-sm" />
                      <span className="text-white text-sm font-semibold">{tip.totalLiked}</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-theme-primary mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                    {tip.title}
                  </h3>

                  <div className="flex items-center gap-3 mb-3 text-sm text-theme-secondary">
                    <div className="flex items-center gap-1">
                      <FaLeaf className="text-primary-600 dark:text-primary-400" />
                      <span>{tip.plantType}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaTag className="text-primary-600 dark:text-primary-400" />
                      <span>{tip.category}</span>
                    </div>
                  </div>

                  {/* Description Preview */}
                  {tip.description && (
                    <p className="text-sm text-theme-secondary mb-4 line-clamp-2">
                      {tip.description}
                    </p>
                  )}

                  {/* Action Button */}
                  <Link
                    to={`/tip-details/${tip._id}`}
                    className="inline-flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    <FaEye />
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-theme-secondary border border-theme rounded-2xl"
          >
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-theme-primary mb-2">No Tips Found</h3>
            <p className="text-theme-secondary mb-6">
              Try adjusting your filters or search query
            </p>
            {(difficulty || category || searchQuery) && (
              <button
                onClick={() => {
                  setDifficulty("");
                  setCategory("");
                  setSearchQuery("");
                }}
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition"
              >
                Clear All Filters
              </button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BrowseTips;
