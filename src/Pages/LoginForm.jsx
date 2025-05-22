import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { signIn,handleGoogle } = use(AuthContext);
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
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };
  const handleGoogleLogin =()=>{
    handleGoogle()
    .then(result=>{
      console.log(result.user)
      navigate(`${location.state ? location.state : "/"}`);
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className="min-h-screen flex bg-green-50 items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side - Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-2">Welcome back</h2>
          <p className="text-sm text-gray-600 mb-6">
            Start your gardening journey. Don’t have an account?{' '}
            <Link className="text-green-700 hover:underline font-medium" to="/auth/register">
              Register
            </Link>
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-green-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="/forgot-password" className="text-sm text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            >
              Sign in to your account
            </button>
          </form>

          {error && (
            <p className="text-red-600 mt-2 text-sm text-center">{error}</p>
          )}

          <div className="my-4 text-center text-sm text-gray-500">or</div>

          <div className="space-y-2">
            <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100">
              <FcGoogle className="text-xl" /> Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 text-green-700">
              <FaFacebook className="text-xl" /> Sign in with Facebook
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block">
          <img
            src="https://i.ibb.co/xqh5L8kW/6343845.jpg"
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
