"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { FiEye, FiXCircle } from "react-icons/fi";

function page() {
  const [orderHistory, setOrderHistory] = useState([]);

  // 🔹 Ambil data pesanan dari localStorage saat halaman dimuat
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrderHistory(storedOrders);
    console.log("📌 Riwayat Pesanan:", storedOrders);
  }, []); // Gunakan [] agar hanya dijalankan saat komponen pertama kali dimuat

  const handleCancelOrder = (id) => {
    // Ambil data pesanan dari localStorage
    let storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
  
    // Hapus hanya pesanan dengan ID tertentu dan status "Menunggu"
    storedOrders = storedOrders.filter((order) => !(order.id === id && order.status === "Menunggu"));
  
    // Simpan kembali ke localStorage
    localStorage.setItem("orderHistory", JSON.stringify(storedOrders));
  
    // Perbarui state
    setOrderHistory(storedOrders);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 sm:ml-64 w-full min-h-screen bg-[#f1f1f1]">
        <h2 className="text-2xl font-bold mb-6">Riwayat Pesanan</h2>
        <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">No</th>
                <th className="p-3">Tanggal</th>
                <th className="p-3">Menu</th>
                <th className="p-3">Subtotal</th>
                <th className="p-3">Pajak</th>
                <th className="p-3">Layanan</th>
                <th className="p-3">Total</th>
                <th className="p-3">Status</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.length === 0 ? (
                <tr>
                  <td colSpan="9" className="p-3 text-center text-gray-500">
                    Tidak ada riwayat pesanan
                  </td>
                </tr>
              ) : (
                orderHistory.map((order, index) => (
                  <tr key={order.id} className="border-t">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{order.date}</td>
                    <td className="p-3 truncate max-w-xs">{order.items}</td>
                    <td className="p-3">Rp{order.subtotal.toLocaleString()}</td>
                    <td className="p-3">Rp{order.tax.toLocaleString()}</td>
                    <td className="p-3">Rp{order.service.toLocaleString()}</td>
                    <td className="p-3 font-bold">
                      Rp{order.total.toLocaleString()}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 text-white text-sm rounded ${
                          order.status === "Menunggu"
                            ? "bg-yellow-500"
                            : order.status === "Diproses"
                            ? "bg-blue-500"
                            : order.status === "Dibatalkan"
                            ? "bg-red-500"
                            : "bg-green-500"
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default page;
