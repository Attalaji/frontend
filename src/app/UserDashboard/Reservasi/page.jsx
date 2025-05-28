"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { FaCheck, FaTimes, FaEdit } from "react-icons/fa";
import useAuthMiddleware from "../../hooks/auth";

const statusColors = {
  Menunggu: "bg-yellow-500 text-white",
  Dibatalkan: "bg-red-500 text-white",
  Diterima: "bg-green-500 text-white",
};

function Page() {
  useAuthMiddleware();

  const [reservations, setReservations] = useState([]);
  const [editing, setEditing] = useState(null); // ID of reservation being edited
  const [editForm, setEditForm] = useState({
    name: "",
    guests: "",
    phone: "",
    email: "",
  });

  // Fetch reservations
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/reservasi");
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
        console.error("Gagal load reservasi:", e);
      }
    })();
  }, []);

  const handleConfirm = async (id) => {
    try {
      await axios.put(`http://localhost:8000/api/reservasi/${id}`, {
        status: "Diterima",
      });
      setReservations((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: "Diterima" } : r))
      );
    } catch (e) {
      console.error("Gagal konfirmasi:", e);
    }
  };

  const handleCancel = async (id) => {
    try {
      await axios.put(`http://localhost:8000/api/reservasi/${id}`, {
        status: "Dibatalkan",
      });
      setReservations((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: "Dibatalkan" } : r))
      );
    } catch (e) {
      console.error("Gagal batalkan:", e);
    }
  };

  const handleEdit = (id) => {
    const r = reservations.find((r) => r.id === id);
    if (!r) return;
    setEditing(id);
    setEditForm({
      name: r.name,
      guests: r.guests,
      phone: r.phone,
      email: r.email,
    });
  };

  const handleEditSave = async () => {
    try {
      await axios.put(`http://localhost:8000/api/reservasi/${editing}`, {
        nama: editForm.name,
        jumlah_orang: editForm.guests,
        telepon: editForm.phone,
        email: editForm.email,
      });

      setReservations((prev) =>
        prev.map((r) =>
          r.id === editing
            ? {
                ...r,
                name: editForm.name,
                guests: editForm.guests,
                phone: editForm.phone,
                email: editForm.email,
              }
            : r
        )
      );

      setEditing(null);
      alert("Reservasi berhasil diperbarui!");
    } catch (error) {
      console.error("Gagal update reservasi:", error);
      alert("Terjadi kesalahan saat memperbarui reservasi.");
    }
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
                  <th className="p-3">No</th>
                  <th className="p-3">Nama</th>
                  <th className="p-3">Tanggal & Waktu</th>
                  <th className="p-3">Jumlah Orang</th>
                  <th className="p-3">Telepon</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Aksi</th>
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
                      <span
                        className={`px-2 py-1 rounded text-sm ${statusColors[r.status]}`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="p-3 flex gap-2">
                      <button
                        title="Edit reservasi"
                        onClick={() => handleEdit(r.id)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit size={20} />
                      </button>
                      <button
                        title="Konfirmasi reservasi"
                        onClick={() => handleConfirm(r.id)}
                        className="text-green-600 hover:text-green-800"
                      >
                        <FaCheck size={20} />
                      </button>
                      <button
                        title="Batalkan reservasi"
                        onClick={() => handleCancel(r.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTimes size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* Modal for Editing */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-[90%] max-w-md">
            <h3 className="text-lg font-bold mb-4">Edit Reservasi</h3>

            <label className="block text-sm mb-1">Nama</label>
            <input
              className="w-full border p-2 mb-4"
              value={editForm.name}
              onChange={(e) =>
                setEditForm({ ...editForm, name: e.target.value })
              }
            />

            <label className="block text-sm mb-1">Jumlah Orang</label>
            <input
              className="w-full border p-2 mb-4"
              type="number"
              value={editForm.guests}
              onChange={(e) =>
                setEditForm({ ...editForm, guests: e.target.value })
              }
            />

            <label className="block text-sm mb-1">Telepon</label>
            <input
              className="w-full border p-2 mb-4"
              value={editForm.phone}
              onChange={(e) =>
                setEditForm({ ...editForm, phone: e.target.value })
              }
            />

            <label className="block text-sm mb-1">Email</label>
            <input
              className="w-full border p-2 mb-4"
              type="email"
              value={editForm.email}
              onChange={(e) =>
                setEditForm({ ...editForm, email: e.target.value })
              }
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditing(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Batal
              </button>
              <button
                onClick={handleEditSave}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
