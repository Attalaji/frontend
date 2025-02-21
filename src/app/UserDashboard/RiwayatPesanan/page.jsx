"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { FiEye, FiXCircle } from "react-icons/fi";

const statusColors = {
  Menunggu: "bg-yellow-500",
  Diproses: "bg-blue-500",
  Dibatalkan: "bg-red-500",
  Selesai: "bg-green-500",
};

function Page() {
  const [orderHistory, setOrderHistory] = useState([]);

  // 🔹 Ambil data pesanan dari localStorage saat halaman dimuat
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrderHistory(storedOrders);
    console.log("📌 Riwayat Pesanan:", storedOrders);
  }, []); 

  // 🔹 Fungsi membatalkan pesanan dengan status "Menunggu"
  const handleCancelOrder = (id) => {
    let storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];

    // Hanya menghapus pesanan yang statusnya "Menunggu"
    storedOrders = storedOrders.map((order) => {
      if (order.id === id && order.status === "Menunggu") {
        return { ...order, status: "Dibatalkan" }; // Perbarui status menjadi "Dibatalkan"
      }
      return order;
    });

    // Simpan kembali ke localStorage
    localStorage.setItem("orderHistory", JSON.stringify(storedOrders));

    // Perbarui state agar UI ikut berubah
    setOrderHistory(storedOrders);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 sm:ml-64 w-full min-h-screen bg-[#f1f1f1]">
        <h2 className="text-2xl font-bold mb-6 text-black">Riwayat Pesanan</h2>
        <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
          {orderHistory.length === 0 ? (
            <p className="text-center text-gray-500">Tidak ada riwayat pesanan.</p>
          ) : (
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3 text-[#000]">No</th>
                  <th className="p-3 text-[#000]">Tanggal</th>
                  <th className="p-3 text-[#000]">Menu</th>
                  <th className="p-3 text-[#000]">Subtotal</th>
                  <th className="p-3 text-[#000]">Pajak</th>
                  <th className="p-3 text-[#000]">Layanan</th>
                  <th className="p-3 text-[#000]">Total</th>
                  <th className="p-3 text-[#000]">Status</th>
                  <th className="p-3 text-[#000]">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((order, index) => (
                  <tr key={order.id} className="border-t">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{order.date}</td>
                    <td className="p-3 truncate max-w-xs">{order.items}</td>
                    <td className="p-3">Rp{(order.subtotal || 0).toLocaleString()}</td>
                    <td className="p-3">Rp{(order.tax || 0).toLocaleString()}</td>
                    <td className="p-3">Rp{(order.service || 0).toLocaleString()}</td>
                    <td className="p-3 font-bold">
                      Rp{(order.total || 0).toLocaleString()}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 text-white text-sm rounded ${
                          statusColors[order.status]
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3 flex gap-2">
                      {order.status === "Menunggu" && (
                        <button
                          className="text-red-600 hover:text-red-800 flex items-center gap-1"
                          onClick={() => handleCancelOrder(order.id)}
                        >
                          <FiXCircle size={18} /> Batal
                        </button>
                      )}
                      {["Diproses", "Selesai"].includes(order.status) && (
                        <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                          <FiEye size={18} /> Detail
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
