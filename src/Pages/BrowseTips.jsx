import { useEffect, useState } from "react";
import { Link } from "react-router";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [difficulty, setDifficulty] = useState("");

  const fetchTips = (selectedDifficulty = "") => {
    let url = "http://localhost:3000/tips";

    if (selectedDifficulty) {
      url += `?difficulty=${selectedDifficulty}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTips(data); 
      });
  };

  useEffect(() => {
    fetchTips(); 
  }, []);

  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setDifficulty(selected);
    fetchTips(selected);
  };

  return (
    <section className="p-6 font-sans bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
        🌱 Browse Garden Tips
      </h2>

      {/* Dropdown Filter */}
      <div className="text-center mb-4">
        <label htmlFor="difficulty" className="mr-2 text-lg font-semibold">
          Filter by Difficulty:
        </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={handleFilterChange}
          className="border px-4 py-2 rounded-md"
        >
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-200 text-green-900">
            <tr>
              <th className="px-6 py-3 text-left">Image</th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Difficulty</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {tips.length > 0 ? (
              tips.map((tip) => (
                <tr key={tip._id} className="border-b hover:bg-green-50">
                  <td className="px-6 py-3">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-16 h-16 rounded object-cover"
                    />
                  </td>
                  <td className="px-6 py-3">{tip.title}</td>
                  <td className="px-6 py-3">{tip.category}</td>
                  <td className="px-6 py-3">{tip.difficulty}</td>
                  <td className="px-6 py-3">
                    <Link
                      to={`/tip-details/${tip._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      👁️ See More
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-3 text-center text-gray-500" colSpan="5">
                  No tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BrowseTips;

