"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Background from "../Asset/Assethome/Background.jpg";

const page = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (name && email && password.length >= 6) {
      try {
        const response = await fetch("http://localhost:8000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
          console.log("Registrasi sukses");
          router.push("/Login");
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Terjadi kesalahan saat registrasi");
        }
      } catch (err) {
        setError("Gagal terhubung ke server");
      }
    } else {
      setError("Harap isi semua kolom dan pastikan password minimal 6 karakter!");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-black bg-opacity-50 p-8 rounded-xl shadow-lg w-[400px] text-white backdrop-blur-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 border-b border-gray-500 pb-2">
          My Steak - Daftar
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleRegister}>
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

          <motion.button
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="w-full bg-[#836A41] hover:bg-[#C59E5F] text-black font-bold py-2 rounded-full tracking-wider"
          >
            DAFTAR
          </motion.button>
        </form>

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