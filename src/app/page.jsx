"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import Background from "../Asset/Assethome/Background.jpg";

const page = () => {
  const router = useRouter();

  // State for input fields and Remember Me status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  // Load remembered email on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.data.token) {
        // Store token
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Remember email if checked
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        // Redirect based on role
        if (response.data.user.role === "admin") {
          router.push("/AdminDashboard");
        } else {
          router.push("/UserDashboard/Menu");
        }
      } else {
        setError("Invalid login credentials!");
      }
    } catch (error) {
      setError("Email atau password salah!");
    }
  };

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
          My Steak - Login
        </h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="flex items-center gap-2 bg-transparent border border-gray-400 p-3 rounded-full">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
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

        {/* Register */}
        <p className="text-center text-sm mt-4">
          Belum punya akun?{" "}
          <Link href="/Daftar" className="text-[#836A41] hover:text-[#C59E5F]">
            Daftar
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default page;
