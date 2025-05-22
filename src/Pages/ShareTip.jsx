import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTip({ ...tip, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            title: "tips submitted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      })
      .catch((error) => {
      
        Swal.fire({
          icon: {error},
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  if (!user) {
    return (
      <div className="text-center mt-20 text-red-600 font-semibold">
        You must be logged in to share a garden tip.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 mt-10 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        ➕ Share a Garden Tip
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="input input-bordered w-full"
          required
          onChange={handleChange}
        />
        <input
          name="plantType"
          type="text"
          placeholder="Plant Type or Topic"
          className="input input-bordered w-full"
          required
          onChange={handleChange}
        />
        <select
          name="difficulty"
          className="select select-bordered w-full"
          onChange={handleChange}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          required
          onChange={handleChange}
        ></textarea>
        <input
          name="image"
          type="url"
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
          onChange={handleChange}
        />
        <select
          name="category"
          className="select select-bordered w-full"
          onChange={handleChange}
        >
          <option>Plant Care</option>
          <option>Composting</option>
          <option>Vertical Gardening</option>
        </select>
        <select
          name="availability"
          className="select select-bordered w-full"
          onChange={handleChange}
        >
          <option>Public</option>
          <option>Hidden</option>
        </select>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
          <input
            type="email"
            value={user?.email}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="btn bg-green-600 text-white w-full hover:bg-green-700"
        >
          Submit Tip
        </button>
      </form>
    </div>
  );
};

export default ShareTip;
