"use client";
import React from "react";
import Image from "next/image";
import Logo from "../Asset/Assetnavbar/LogoMySteak.svg";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

function Sidebar({ drawerOpen, setDrawerOpen }) {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const handleLogout = () => {
    logout();
  }

  return (
    <div>
      {/* Toggle sidebar button (mobile) */}
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
      </button>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-[#363636]`}
        onClick={(e) => e.stopPropagation()}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          {/* Logo */}
          <a href="#" className="flex items-center ps-2.5 mb-5">
            <Image
              src={Logo}
              alt="Logo MySteak"
              className="md:w-1/4 me-3 w-1/6"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              My Steak
            </span>
          </a>

          <ul className="space-y-2 font-medium">
            {/* Reservation Section */}
            <li>
              <a
                href="/UserDashboard/Reservasi"
                className="flex items-center p-2 rounded-lg text-white hover:bg-[#C59E5F] group"
              >
                <FaRegCalendarCheck
                  size={20}
                  className="text-gray-400 group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Reservasi</span>
              </a>
            </li>

            {/* ✅ New "Riwayat Reservasi" Section */}
            <li>
              <a
                href="/UserDashboard/RiwayatReservasi"
                className="flex items-center p-2 rounded-lg text-white hover:bg-[#C59E5F] group"
              >
                <FaRegCalendarCheck size={20} className="text-gray-400 group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Riwayat Reservasi</span>
              </a>
            </li>

            {/* Logout Section */}
            <li>
              <a
                onClick={handleLogout}
                className="flex items-center p-2 rounded-lg text-white hover:bg-[#C59E5F] group"
              >
                <FiLogOut
                  size={20}
                  className="text-gray-400 group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;