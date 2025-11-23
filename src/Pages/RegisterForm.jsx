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
    <div className="min-h-screen bg-theme-primary flex flex-col md:flex-row items-center justify-center font-sans px-4 py-12">
      <div className="bg-theme-secondary border border-theme w-full md:w-1/2 max-w-md p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-primary-700 dark:text-primary-400 mb-2">
          Create your account
        </h2>
        <p className="text-sm text-theme-secondary mb-6">
          Join our gardening community today 🌿
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-sm text-theme-primary">Name</label>
            <input
              type="text"
              required
              name="name"
              placeholder="Your full name"
              className="w-full mt-1 px-4 py-2 bg-theme-primary border border-theme rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary"
            />
            {nameError && <p className="text-xs text-red-600 dark:text-red-400">{nameError}</p>}
          </div>
          <div>
            <label className="text-sm text-theme-primary">Photo URL</label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Link to your profile photo"
              className="w-full mt-1 px-4 py-2 bg-theme-primary border border-theme rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary"
            />
          </div>
          <div>
            <label className="text-sm text-theme-primary">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 bg-theme-primary border border-theme rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary"
            />
          </div>
          <div>
            <label className="text-sm text-theme-primary">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 bg-theme-primary border border-theme rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary"
            />
            {passwordError && (
              <p className="text-xs text-red-600 dark:text-red-400">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-md font-medium transition"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-theme"></div>
          <span className="mx-4 text-sm text-theme-secondary">or</span>
          <div className="flex-grow border-t border-theme"></div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleGoogleRegister}
            className="flex items-center justify-center gap-2 w-full py-2 border border-theme bg-theme-primary rounded-md hover:bg-theme-tertiary text-theme-primary transition"
          >
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-2 border border-theme bg-theme-primary rounded-md hover:bg-theme-tertiary text-primary-600 dark:text-primary-400 transition">
            <FaFacebook size={20} className="text-blue-600" /> Facebook
          </button>
        </div>

        <p className="text-sm text-theme-secondary text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
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
