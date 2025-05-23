import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
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

  return (
    <section className="p-6 max-w-6xl mx-auto font-sans">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        🌱 My Garden Tips
      </h2>
      {myTips.length === 0 ? (
        <p className="text-green-600">No tips shared yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-center border-green-300">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTips.map((tip) => (
                <tr key={tip._id}>
                  <td className="p-2 border">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-16 h-16 rounded object-cover mx-auto"
                    />
                  </td>
                  <td className="p-2 border">{tip.title}</td>
                  <td className="p-2 border">{tip.category}</td>
                  <td className="p-2 border">{tip.availability}</td>
                  <td className="p-2 border space-x-2">
                    <button
                      onClick={() => navigate(`/update-tip/${tip._id}`)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(tip._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default MyTips;
