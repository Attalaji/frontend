"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Background from "../Asset/Assethome/Background.jpg";

const page = () => {
  const router = useRouter();

  // State untuk input data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Fungsi register
  const handleRegister = (e) => {
    e.preventDefault();

    // Simulasi validasi sederhana
    if (name && email && password.length >= 6) {
      console.log("Registrasi sukses:", { name, email, password });
      router.push("/Login");
    } else {
      setError(
        "Harap isi semua kolom dan pastikan password minimal 6 karakter!"
      );
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-black bg-opacity-50 p-8 rounded-xl shadow-lg w-[400px] text-white backdrop-blur-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 border-b border-gray-500 pb-2">
          My Steak - Daftar
        </h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="flex items-center gap-2 bg-transparent border border-gray-400 p-3 rounded-full">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-white placeholder-gray-300"
              />
            </label>
          </div>

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

          {/* Register Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="w-full bg-[#836A41] hover:bg-[#C59E5F] text-black font-bold py-2 rounded-full tracking-wider"
          >
            DAFTAR
          </motion.button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm mt-4">
          Sudah punya akun?{" "}
          <Link href="/Login" className="text-[#836A41] hover:text-[#C59E5F]">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default page;
