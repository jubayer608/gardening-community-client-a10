import { useParams } from "react-router";
import { useEffect, useState } from "react";

const TipDetails = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/tips/${id}`)
      .then(res => res.json())
      .then(data => setTip(data));
  }, [id]);

  const handleLike = () => {
    fetch(`http://localhost:3000/tips/like/${id}`, {
      method: "PATCH",
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setTip(prev => ({
            ...prev,
            totalLiked: (prev.totalLiked || 0) + 1,
          }));
        }
      });
  };

  if (!tip) return <div className="text-center py-10">Loading...</div>;
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans bg-white shadow rounded mt-10">
      <img src={tip.image} alt={tip.title} className="w-full h-96 overflow-hidden rounded mb-6" />
      <h2 className="text-3xl font-bold text-green-800  mb-2">{tip.title}</h2>
      <p className="text-green-600 dark:text-green-400 mb-4">
        {tip.plantType} | {tip.category} | Difficulty: {tip.difficulty}
      </p>
      <p className="text-gray-700 00 mb-4">{tip.description}</p>
      <p className="text-sm text-gray-500 ">
        Shared by: {tip.name} ({tip.email})
      </p>

      <button
        onClick={handleLike}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        ❤️ Like ({tip.totalLiked || 0})
      </button>
    </div>
  );
};

export default TipDetails;
