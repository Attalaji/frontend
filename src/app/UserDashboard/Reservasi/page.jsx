"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { FiEdit, FiTrash2, FiEye, FiXCircle } from "react-icons/fi";

const statusColors = {
  Menunggu: "bg-yellow-500 text-black",
  Diproses: "bg-blue-500 text-white",
  Dibatalkan: "bg-red-500 text-white",
  Selesai: "bg-green-500 text-white",
};

function Page() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(storedReservations);
  }, []);

  const handleCancelOrder = (id) => {
    let updatedReservations = reservations.map((reservation) => {
      if (reservation.id === id && reservation.status === "Menunggu") {
        return { ...reservation, status: "Dibatalkan" };
      }
      return reservation;
    });

    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 sm:ml-64 w-full min-h-screen bg-[#f1f1f1]">
        <h2 className="text-2xl font-bold mb-6 text-black">Reservasi</h2>
        <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
          {reservations.length === 0 ? (
            <p className="text-center text-gray-500">Tidak ada reservasi.</p>
          ) : (
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3 text-[#000]">Nama</th>
                  <th className="p-3 text-[#000]">Tanggal & Waktu</th>
                  <th className="p-3 text-[#000]">Jumlah Orang</th>
                  <th className="p-3 text-[#000]">Status</th>
                  <th className="p-3 text-[#000]">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation, index) => (
                  <tr key={index} className="border-t border-gray-600 text-gray-300">
                    <td className="p-3">{reservation.name}</td>
                    <td className="p-3">{reservation.date}</td>
                    <td className="p-3">{reservation.guests}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-sm rounded ${statusColors[reservation.status]}`}>
                        {reservation.status}
                      </span>
                    </td>
                    <td className="p-3 flex gap-2">
                      {reservation.status === "Menunggu" && (
                        <button
                          className="text-red-400 hover:text-red-300"
                          onClick={() => handleCancelOrder(reservation.id)}
                        >
                          <FiXCircle size={18} />
                        </button>
                      )}
                      {["Diproses", "Selesai"].includes(reservation.status) && (
                        <button className="text-blue-400 hover:text-blue-300">
                          <FiEye size={18} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}

export default Page;
