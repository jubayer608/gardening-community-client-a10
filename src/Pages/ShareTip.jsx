import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { motion } from "framer-motion";
import { 
  FaLeaf, 
  FaImage, 
  FaTag, 
  FaLock, 
  FaUser, 
  FaEnvelope,
  FaSeedling,
  FaBook,
  FaGlobe,
  FaEyeSlash
} from "react-icons/fa";
import Swal from "sweetalert2";

const ShareTip = () => {
  const { user } = useContext(AuthContext);
  const [tip, setTip] = useState({
    title: "",
    plantType: "",
    difficulty: "Easy",
    description: "",
    image: "",
    category: "Plant Care",
    availability: "Public",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTip({ ...tip, [name]: value });
    
    if (name === "image" && value) {
      setImagePreview(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const tipData = {
      ...tip,
      email: user?.email,
      name: user?.displayName,
    };

    fetch("https://gardening-community-server-flax.vercel.app/tips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Tip submitted successfully!",
            showConfirmButton: false,
            timer: 2000,
          });
          setTip({
            title: "",
            plantType: "",
            difficulty: "Easy",
            description: "",
            image: "",
            category: "Plant Care",
            availability: "Public",
          });
          setImagePreview("");
          e.target.reset();
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8 bg-theme-secondary border border-theme rounded-xl shadow-lg max-w-md"
        >
          <FaLock className="text-5xl text-primary-600 dark:text-primary-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-theme-primary mb-2">
            Login Required
          </h2>
          <p className="text-theme-secondary">
            You must be logged in to share a garden tip.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-theme-primary py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
            <FaLeaf className="text-4xl text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-700 dark:text-primary-400 mb-3">
            Share Your Garden Tip
          </h1>
          <p className="text-theme-secondary text-lg">
            Help others grow by sharing your gardening wisdom
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-theme-secondary border border-theme rounded-2xl shadow-xl p-6 md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="flex items-center gap-2 text-theme-primary font-semibold mb-2">
                <FaBook className="text-primary-600 dark:text-primary-400" />
                Tip Title
              </label>
              <input
                name="title"
                type="text"
                placeholder="e.g., How to Grow Tomatoes in Small Spaces"
                className="w-full px-4 py-3 bg-theme-primary border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary placeholder:text-theme-tertiary transition"
                required
                value={tip.title}
                onChange={handleChange}
              />
            </div>

            {/* Plant Type and Difficulty Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-theme-primary font-semibold mb-2">
                  <FaSeedling className="text-primary-600 dark:text-primary-400" />
                  Plant Type
                </label>
                <input
                  name="plantType"
                  type="text"
                  placeholder="e.g., Tomatoes, Herbs, Flowers"
                  className="w-full px-4 py-3 bg-theme-primary border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary placeholder:text-theme-tertiary transition"
                  required
                  value={tip.plantType}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-theme-primary font-semibold mb-2">
                  <FaTag className="text-primary-600 dark:text-primary-400" />
                  Difficulty Level
                </label>
                <select
                  name="difficulty"
                  className="w-full px-4 py-3 bg-theme-primary border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary transition"
                  value={tip.difficulty}
                  onChange={handleChange}
                >
                  <option value="Easy" className="bg-theme-primary">Easy 🌱</option>
                  <option value="Medium" className="bg-theme-primary">Medium 🌿</option>
                  <option value="Hard" className="bg-theme-primary">Hard 🌳</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="flex items-center gap-2 text-theme-primary font-semibold mb-2">
                <FaBook className="text-primary-600 dark:text-primary-400" />
                Description
              </label>
              <textarea
                name="description"
                placeholder="Share detailed instructions, tips, and insights about your gardening tip..."
                rows="6"
                className="w-full px-4 py-3 bg-theme-primary border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary placeholder:text-theme-tertiary resize-none transition"
                required
                value={tip.description}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Image URL and Preview */}
            <div>
              <label className="flex items-center gap-2 text-theme-primary font-semibold mb-2">
                <FaImage className="text-primary-600 dark:text-primary-400" />
                Image URL
              </label>
              <input
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 bg-theme-primary border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary placeholder:text-theme-tertiary transition"
                required
                value={tip.image}
                onChange={handleChange}
              />
              {imagePreview && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 rounded-lg overflow-hidden border border-theme"
                >
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-48 object-cover"
                    onError={() => setImagePreview("")}
                  />
                </motion.div>
              )}
            </div>

            {/* Category and Availability Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-theme-primary font-semibold mb-2">
                  <FaTag className="text-primary-600 dark:text-primary-400" />
                  Category
                </label>
                <select
                  name="category"
                  className="w-full px-4 py-3 bg-theme-primary border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary transition"
                  value={tip.category}
                  onChange={handleChange}
                >
                  <option value="Plant Care" className="bg-theme-primary">Plant Care</option>
                  <option value="Composting" className="bg-theme-primary">Composting</option>
                  <option value="Vertical Gardening" className="bg-theme-primary">Vertical Gardening</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-theme-primary font-semibold mb-2">
                  {tip.availability === "Public" ? (
                    <FaGlobe className="text-primary-600 dark:text-primary-400" />
                  ) : (
                    <FaEyeSlash className="text-primary-600 dark:text-primary-400" />
                  )}
                  Visibility
                </label>
                <select
                  name="availability"
                  className="w-full px-4 py-3 bg-theme-primary border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary transition"
                  value={tip.availability}
                  onChange={handleChange}
                >
                  <option value="Public" className="bg-theme-primary">Public 🌍</option>
                  <option value="Hidden" className="bg-theme-primary">Hidden 🔒</option>
                </select>
              </div>
            </div>

            {/* User Info (Read-only) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-theme-tertiary rounded-lg border border-theme">
              <div>
                <label className="flex items-center gap-2 text-theme-secondary text-sm font-semibold mb-2">
                  <FaUser className="text-primary-600 dark:text-primary-400" />
                  Your Name
                </label>
                <input
                  type="text"
                  value={user?.displayName || "Not set"}
                  readOnly
                  className="w-full px-4 py-2 bg-theme-secondary border border-theme rounded-lg text-theme-primary cursor-not-allowed"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-theme-secondary text-sm font-semibold mb-2">
                  <FaEnvelope className="text-primary-600 dark:text-primary-400" />
                  Your Email
                </label>
                <input
                  type="email"
                  value={user?.email || "Not set"}
                  readOnly
                  className="w-full px-4 py-2 bg-theme-secondary border border-theme rounded-lg text-theme-primary cursor-not-allowed"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-lg transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <FaLeaf />
                  Submit Your Tip
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ShareTip;
