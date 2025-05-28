"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

const statusColors = {
  Diterima: "bg-green-500 text-white",
};

function RiwayatReservasi() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/riwayat-reservasi");
      setReservations(
        data.map((r) => ({
          id: r.id,
          name: r.nama,
          date: r.tanggal_waktu,
          guests: r.jumlah_orang,
          phone: r.telepon,
          email: r.email,
          status: r.status,
        }))
      );
    } catch (e) {
      console.error("Gagal load riwayat reservasi:", e);
    }
  };

  const handleDeleteAll = async () => {
    const confirmDelete = confirm("Yakin ingin menghapus semua riwayat?");
    if (!confirmDelete) return;

    try {
      await axios.delete("http://localhost:8000/api/riwayat-reservasi");
      setReservations([]);
      alert("Riwayat berhasil dihapus!");
    } catch (e) {
      console.error("Gagal menghapus riwayat:", e);
      alert("Terjadi kesalahan saat menghapus.");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 sm:ml-64 w-full min-h-screen bg-[#f1f1f1]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-black">Riwayat Reservasi</h2>
          <button
            onClick={handleDeleteAll}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Hapus Semua Riwayat
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
          {reservations.length === 0 ? (
            <p className="text-center text-gray-500">Tidak ada reservasi yang diterima.</p>
          ) : (
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3">No</th>
                  <th className="p-3">Nama</th>
                  <th className="p-3">Tanggal & Waktu</th>
                  <th className="p-3">Jumlah Orang</th>
                  <th className="p-3">Telepon</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((r, i) => (
                  <tr key={r.id} className="border-t text-black">
                    <td className="p-3">{i + 1}</td>
                    <td className="p-3">{r.name}</td>
                    <td className="p-3">{r.date}</td>
                    <td className="p-3">{r.guests}</td>
                    <td className="p-3">{r.phone}</td>
                    <td className="p-3">{r.email}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-sm ${statusColors[r.status]}`}>
                        {r.status}
                      </span>
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

export default RiwayatReservasi;
