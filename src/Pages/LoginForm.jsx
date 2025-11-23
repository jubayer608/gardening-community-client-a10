import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { signIn, handleGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };
  const handleGoogleLogin = () => {
    handleGoogle()
      .then((result) => {
        // console.log(result.user)
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // console.log(error)
        const message = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: { message },
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="min-h-screen flex bg-theme-primary items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-theme-secondary border border-theme rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-primary-700 dark:text-primary-400 mb-2">
            Welcome back
          </h2>
          <p className="text-sm text-theme-secondary mb-6">
            Start your gardening journey. Don't have an account?{" "}
            <Link
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
              to="/auth/register"
            >
              Register
            </Link>
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-theme-primary">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 px-4 py-2 bg-theme-primary border border-theme rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-theme-primary">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full mt-1 px-4 py-2 bg-theme-primary border border-theme rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-theme-primary"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary-600"
                />
                <span className="ml-2 text-sm text-theme-secondary">Remember me</span>
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition"
            >
              Sign in to your account
            </button>
          </form>

          {error && (
            <p className="text-red-600 dark:text-red-400 mt-2 text-sm text-center">{error}</p>
          )}

          <div className="my-4 text-center text-sm text-theme-secondary">or</div>

          <div className="space-y-2">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 border border-theme bg-theme-primary py-2 rounded-md hover:bg-theme-tertiary text-theme-primary transition"
            >
              <FcGoogle className="text-xl" /> Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-theme bg-theme-primary py-2 rounded-md hover:bg-theme-tertiary text-primary-600 dark:text-primary-400 transition">
              <FaFacebook className="text-xl" /> Sign in with Facebook
            </button>
          </div>
        </div>
        <div className="hidden md:block bg-theme-tertiary">
          <img
            src="https://i.ibb.co/xqh5L8kW/6343845.jpg"
            alt="Login Visual"
            className="h-full w-full object-cover opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
