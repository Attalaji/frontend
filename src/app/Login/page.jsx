"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from '../context/AuthContext'
import Background from "../Asset/Assethome/Background.jpg";
import React from 'react'

function page () {
  const { login } = useAuth()
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })
  const [error, setError] = React.useState('')
  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
};
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(form)
    } catch (error) {
      setError(error.response.data.message)
    }
  }
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-black bg-opacity-50 p-8 rounded-xl shadow-lg w-[400px] text-white backdrop-blur-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 border-b border-gray-500 pb-2">
          My Steak - Admin Login
        </h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="flex items-center gap-2 bg-transparent border border-gray-400 p-3 rounded-full">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none text-white placeholder-gray-300"
              />
            </label>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="flex items-center gap-2 bg-transparent border border-gray-400 p-3 rounded-full">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                name='password'
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none text-white placeholder-gray-300"
              />
            </label>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                // checked={rememberMe}
                // onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4"
              />
              Remember Me
            </label>
            <a href="#" className="text-white-400 hover:text-[#C59E5F]">
              Lupa Sandi
            </a>
          </div>

          {/* Login Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="w-full bg-[#836A41] hover:bg-[#C59E5F] text-black font-bold py-2 rounded-full tracking-wider"
          >
            LOGIN
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default page;
