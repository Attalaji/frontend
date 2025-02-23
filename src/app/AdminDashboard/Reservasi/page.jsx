"use client";
import React, { useState } from "react";
import Sidebar from "../../components/AdminSidebar";
import { MdDelete, MdEdit } from "react-icons/md";

const statusColors = {
  Menunggu: "bg-yellow-500 text-white",
  Dibatalkan: "bg-red-500 text-white",
  Diterima: "bg-green-500 text-white",
};

function page() {
  // 🔹 Data dummy untuk reservasi
  const [reservations, setReservations] = useState([
    {
      id: 1,
      name: "John Doe",
      date: "2024-12-05 18:00",
      guests: 4,
      status: "Menunggu",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "2024-12-04 19:30",
      guests: 2,
      status: "Diterima",
    },
    {
      id: 3,
      name: "Michael Lee",
      date: "2024-12-03 17:00",
      guests: 5,
      status: "Diterima",
    },
  ]);

  // State untuk mengedit reservasi
  const [editingReservation, setEditingReservation] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [updatedGuests, setUpdatedGuests] = useState("");

  // Fungsi untuk membuka form edit
  const handleEditReservation = (reservation) => {
    setEditingReservation(reservation);
    setUpdatedName(reservation.name);
    setUpdatedDate(reservation.date.replace(" ", "T")); // Mengonversi spasi jadi T untuk datetime-local
    setUpdatedGuests(reservation.guests);
  };

  // Fungsi untuk menyimpan perubahan
  const handleSaveEdit = () => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === editingReservation.id
        ? {
            ...reservation,
            name: updatedName,
            date: updatedDate.replace("T", " "),
            guests: updatedGuests,
          }
        : reservation
    );
    setReservations(updatedReservations);
    setEditingReservation(null); // Menutup modal atau form edit
  };

  // 🔹 Fungsi membatalkan reservasi dengan status "Menunggu"
  const handleCancelReservation = (id) => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === id && reservation.status === "Menunggu"
        ? { ...reservation, status: "Dibatalkan" }
        : reservation
    );
    setReservations(updatedReservations);
  };

  // 🔹 Fungsi mengonfirmasi reservasi dengan status "Menunggu"
  const handleConfirmReservation = (id) => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === id && reservation.status === "Menunggu"
        ? { ...reservation, status: "Diterima" }
        : reservation
    );
    setReservations(updatedReservations);
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
                  <th className="p-3 text-[#000]">No</th>
                  <th className="p-3 text-[#000]">Nama</th>
                  <th className="p-3 text-[#000]">Tanggal & Waktu</th>
                  <th className="p-3 text-[#000]">Jumlah Orang</th>
                  <th className="p-3 text-[#000]">Status</th>
                  <th className="p-3 text-[#000]"></th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation, index) => (
                  <tr key={reservation.id} className="border-t text-black">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{reservation.name}</td>
                    <td className="p-3">{reservation.date}</td>
                    <td className="p-3">{reservation.guests}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 text-sm rounded ${
                          statusColors[reservation.status]
                        }`}
                      >
                        {reservation.status}
                      </span>
                    </td>
                    <td className="p-3 flex gap-1">
                      {reservation.status === "Menunggu" && (
                        <>
                          <button
                            className="text-blue-600 hover:text-blue-200 border-blue-600 border-2 p-0.25 px-2 hover:bg-blue-600"
                            onClick={() => handleConfirmReservation(reservation.id)}
                          >
                            Konfirmasi
                          </button>
                          <button
                            className="text-red-600 hover:text-red-200 border-red-600 border-2 p-0.25 px-2 hover:bg-red-600"
                            onClick={() => handleCancelReservation(reservation.id)}
                          >
                            Batalkan
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* Form Edit Modal */}
      {editingReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Edit Reservasi</h3>
            <div className="mb-4">
              <label className="block text-sm mb-2">Nama</label>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Tanggal & Waktu</label>
              <input
                type="datetime-local"
                value={updatedDate}
                onChange={(e) => setUpdatedDate(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Jumlah Orang</label>
              <input
                type="number"
                value={updatedGuests}
                onChange={(e) => setUpdatedGuests(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleSaveEdit}
                className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded"
              >
                Simpan
              </button>
              <button
                onClick={() => setEditingReservation(null)}
                className="bg-gray-500 hover:bg-gray-800 text-white py-2 px-4 rounded"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
