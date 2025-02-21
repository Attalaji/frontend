"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { MdDelete } from "react-icons/md";

const statusColors = {
  Menunggu: "bg-yellow-500",
  Diproses: "bg-blue-500",
  Dibatalkan: "bg-red-500",
  Selesai: "bg-green-500",
};

function page() {
  // 🔹 Data dummy untuk riwayat pesanan
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 1,
      date: "2024-12-12",
      items: "Wagyu Ribeye (1), Nasi Goreng (2)",
      subtotal: 201000,
      tax: 201000 * 0.11,
      service: 15000,
      total: 201000 + 201000 * 0.11 + 15000,
      status: "Menunggu",
    },
    {
      id: 2,
      date: "2024-12-09",
      items:
        "Wagyu Ribeye (2), Nasi Goreng (3), Spaghetti Carbonara (1), Chicken Katsu (2), French Fries (2), Lychee Tea (4), Matcha Latte (2), Tiramisu (1), Grilled Salmon (1), Mashed Potatoes (2)",
      subtotal: 895000,
      tax: 895000 * 0.11,
      service: 25000,
      total: 895000 + 895000 * 0.11 + 25000,
      status: "Menunggu",
    },
    {
      id: 3,
      date: "2024-12-03",
      items: "Chicken Katsu (2), Spaghetti Carbonara (1)",
      subtotal: 175000,
      tax: 175000 * 0.11,
      service: 15000,
      total: 175000 + 175000 * 0.11 + 15000,
      status: "Diproses",
    },
    {
      id: 4,
      date: "2024-12-01",
      items: "Prime Sirloin (1), French Fries (1)",
      subtotal: 140000,
      tax: 140000 * 0.11,
      service: 15000,
      total: 140000 + 140000 * 0.11 + 15000,
      status: "Selesai",
    },
  ]);

  // 🔹 Fungsi membatalkan pesanan dengan status "Menunggu"
  const handleCancelOrder = (id) => {
    const updatedOrders = orderHistory.map((order) =>
      order.id === id && order.status === "Menunggu"
        ? { ...order, status: "Dibatalkan" }
        : order
    );
    setOrderHistory(updatedOrders);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 sm:ml-64 w-full min-h-screen bg-[#f1f1f1]">
        <h2 className="text-2xl font-bold mb-6 text-black">Riwayat Pesanan</h2>
        <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
          {orderHistory.length === 0 ? (
            <p className="text-center text-gray-500">
              Tidak ada riwayat pesanan.
            </p>
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
                    {/* Scrollable column for items */}
                    <td className="p-3 max-w-xs overflow-x-auto">
                      <div className="whitespace-nowrap scrollbar-hidden">{order.items}</div>
                    </td>
                    <td className="p-3">Rp{order.subtotal.toLocaleString()}</td>
                    <td className="p-3">Rp{order.tax.toLocaleString()}</td>
                    <td className="p-3">Rp{order.service.toLocaleString()}</td>
                    <td className="p-3 font-bold">
                      Rp{order.total.toLocaleString()}
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
                    <td className="p-3">
                      {order.status === "Menunggu" && (
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleCancelOrder(order.id)}
                        >
                          <MdDelete size={20} />
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

export default page;
