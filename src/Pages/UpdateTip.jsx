import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Loading from "./Loading";

const UpdateTip = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [tipData, setTipData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {-
    fetch(`https://gardening-community-server-flax.vercel.app/tips/${id}`)
      .then(res => res.json())
      .then(data => setTipData(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedTip = {
      title: form.title.value,
      plantType: form.plantType.value,
      difficulty: form.difficulty.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      availability: form.availability.value,
    };

    fetch(`https://gardening-community-server-flax.vercel.app/tips/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTip),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Update successfully",
  showConfirmButton: false,
  timer: 1500
});
          navigate("/my-tips");
        }
      });
  };

  if (!tipData) return <p className="text-center mt-10"><Loading></Loading></p>;

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">✏️ Update Tip</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-green-50 p-6 rounded shadow">
        <input name="title" defaultValue={tipData.title} className="w-full p-2 border rounded" placeholder="Title" required />
        <input name="plantType" defaultValue={tipData.plantType} className="w-full p-2 border rounded" placeholder="Plant Type" required />
        
        <select name="difficulty" defaultValue={tipData.difficulty} className="w-full p-2 border rounded">
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <textarea name="description" defaultValue={tipData.description} className="w-full p-2 border rounded" placeholder="Description" rows={4}></textarea>
        <input name="image" defaultValue={tipData.image} className="w-full p-2 border rounded" placeholder="Image URL" required />

        <select name="category" defaultValue={tipData.category} className="w-full p-2 border rounded">
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
        </select>

        <select name="availability" defaultValue={tipData.availability} className="w-full p-2 border rounded">
          <option>Public</option>
          <option>Hidden</option>
        </select>

        <input className="w-full p-2 bg-gray-100 rounded" value={user?.email} readOnly />
        <input className="w-full p-2 bg-gray-100 rounded" value={user?.displayName || user?.name} readOnly />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Update Tip
        </button>
      </form>
    </section>
  );
};

export default UpdateTip;
