import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate, Link } from "react-router";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaPlus, FaLeaf } from "react-icons/fa";
import Swal from "sweetalert2";

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    if (user?.email) {
      fetch(`https://gardening-community-server-flax.vercel.app/tips/by-user?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTips(data))
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gardening-community-server-flax.vercel.app/tips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setMyTips((prev) => prev.filter((tip) => tip._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your data has been deleted.",
                icon: "success",
              });
            }
          });
      }
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
          <FaLeaf className="text-5xl text-primary-600 dark:text-primary-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-theme-primary mb-2">
            Login Required
          </h2>
          <p className="text-theme-secondary mb-6">
            Please login to view your tips.
          </p>
          <Link
            to="/auth/login"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            Go to Login
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-theme-primary py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-700 dark:text-primary-400 mb-2">
              My Garden Tips
            </h1>
            <p className="text-theme-secondary">
              Manage and track all your shared gardening tips
            </p>
          </div>
          <Link
            to="/share-tip"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg hover:shadow-xl"
          >
            <FaPlus />
            Share New Tip
          </Link>
        </motion.div>

        {/* Tips Grid */}
        {myTips.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-theme-secondary border border-theme rounded-2xl"
          >
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-theme-primary mb-2">No Tips Yet</h3>
            <p className="text-theme-secondary mb-6">
              Start sharing your gardening wisdom with the community!
            </p>
            <Link
              to="/share-tip"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              <FaPlus />
              Share Your First Tip
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myTips.map((tip, index) => (
              <motion.div
                key={tip._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-theme-secondary border border-theme rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      tip.availability === 'Public' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-500 text-white'
                    }`}>
                      {tip.availability}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-theme-primary mb-2 line-clamp-2">
                    {tip.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4 text-sm text-theme-secondary">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                      {tip.category}
                    </span>
                    <span className="px-3 py-1 bg-theme-tertiary rounded-full">
                      {tip.difficulty}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/update-tip/${tip._id}`)}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                    >
                      <FaEdit />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(tip._id)}
                      className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyTips;
