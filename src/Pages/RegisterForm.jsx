import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const { createUser, setUser, updateUser, handleGoogle } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, and one special character (!@#$%^&*)."
      );
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "successfully register..",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => {
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorMessage, errorCode);
        Swal.fire({
          icon: "error",
          title: {errorCode},
          text: {errorMessage},
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  const handleGoogleRegister = () => {
    handleGoogle()
      .then((result) => {
        // console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col md:flex-row items-center justify-center font-sans px-4 py-12">
      <div className="bg-white w-full md:w-1/2 max-w-md p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-green-700 mb-2">
          Create your account
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Join our gardening community today 🌿
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-sm text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}
          </div>
          <div>
            <label className="text-sm text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Link to your profile photo"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {passwordError && (
              <p className="text-xs text-error">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleGoogleRegister}
            className="flex items-center justify-center gap-2 w-full py-2 border rounded-md hover:bg-gray-100 transition"
          >
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-2 border rounded-md hover:bg-gray-100 transition">
            <FaFacebook size={20} className="text-blue-600" /> Facebook
          </button>
        </div>

        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-green-700 hover:underline font-medium"
          >
            Login here
          </Link>
        </p>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://i.ibb.co/tPQh6gqs/Sign-up-rafiki.png"
          alt="Register Illustration"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
