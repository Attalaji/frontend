"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import menuItems from "../../data/menuItems";
import { useRouter } from "next/navigation";

function page() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  // 🔹 Load pesanan dari localStorage saat halaman dimuat
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
    console.log("Orders Data:", storedOrders);
  }, []); // Gunakan [] agar hanya dijalankan saat komponen pertama kali dimuat

  // 🔹 Hitung subtotal sebelum digunakan
  const subtotal = orders.reduce(
    (acc, order) => acc + (order.price || 0) * (order.quantity || 0),
    0
  );
  const tax = subtotal * 0.11;
  const service = 15000;
  const total = subtotal + tax + service;

  // 🔹 Tambah ke pesanan
  const addToOrder = (menuName, price) => {
    const existingOrder = orders.find((order) => order.name === menuName);
    let updatedOrders;

    if (existingOrder) {
      updatedOrders = orders.map((order) =>
        order.name === menuName
          ? { ...order, quantity: order.quantity + 1 }
          : order
      );
    } else {
      updatedOrders = [...orders, { name: menuName, price, quantity: 1 }];
    }

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // 🔹 Hapus dari pesanan
  const removeFromOrder = (menuName) => {
    const existingOrder = orders.find((order) => order.name === menuName);
    if (!existingOrder) return;

    let updatedOrders;
    if (existingOrder.quantity > 1) {
      updatedOrders = orders.map((order) =>
        order.name === menuName
          ? { ...order, quantity: order.quantity - 1 }
          : order
      );
    } else {
      updatedOrders = orders.filter((order) => order.name !== menuName);
    }

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // 🔹 Fungsi "PESAN" untuk menyimpan ke localStorage
  const handlePlaceOrder = () => {
    if (orders.length === 0) {
      alert("Tidak ada pesanan untuk diproses.");
      return;
    }

    // Ambil pesanan sebelumnya
    const previousOrders =
      JSON.parse(localStorage.getItem("orderHistory")) || [];

    // Format pesanan baru
    const newOrder = {
      id: previousOrders.length + 1,
      date: new Date().toLocaleDateString("id-ID"),
      items: orders
        .map((order) => `${order.name} (${order.quantity})`)
        .join(", "),
      subtotal,
      tax,
      service,
      total,
      status: "Menunggu",
    };

    // Simpan dengan **pesanan baru di atas**
    const updatedOrders = [newOrder, ...previousOrders];

    console.log("✅ Order yang Disimpan:", updatedOrders);

    // Simpan ke localStorage
    localStorage.setItem("orderHistory", JSON.stringify(updatedOrders));

    // Hapus pesanan setelah diproses
    localStorage.removeItem("orders");
    setOrders([]);

    // Arahkan ke halaman Riwayat Pesanan
    router.push("/UserDashboard/RiwayatPesanan");
  };

  // 🔹 Filter menu berdasarkan kategori
  const filteredMenu =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex">
      <Sidebar setSelectedCategory={setSelectedCategory} />
      <main className="p-4 sm:ml-64 w-full min-h-screen bg-[#f1f1f1]">
        <h2 className="text-2xl font-bold mb-6">Halo, [nama]</h2>
        <div className="flex gap-8">
          {/* MENU SECTION */}
          <div className="grid grid-cols-3 w-full gap-6">
            {filteredMenu.map((menu, index) => (
              <div
                key={index}
                className="bg-white p-4 max-h-fit rounded-lg shadow"
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt={menu.name}
                  className="rounded-lg w-full h-40 object-cover mb-3"
                />
                <h3 className="text-lg font-semibold">{menu.name}</h3>
                <p className="text-gray-600 mb-3">
                  Rp{menu.price.toLocaleString()}
                </p>
                <button
                  className="bg-[#C59E5F] text-white px-4 py-2 rounded flex items-center gap-2"
                  onClick={() => addToOrder(menu.name, menu.price)}
                >
                  <MdShoppingCart size={18} /> Tambah
                </button>
              </div>
            ))}
          </div>

          {/* PESANAN SECTION */}
          <div className="bg-white rounded-lg shadow p-6 w-full max-h-fit max-w-md ml-auto">
            <h3 className="text-lg font-bold mb-4">Pesanan Saya</h3>
            {orders.length === 0 ? (
              <p className="text-gray-600">Belum ada pesanan</p>
            ) : (
              <div className="space-y-4">
                {orders.map((order, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-medium">{order.name}</p>
                      <p className="text-sm text-gray-500">
                        Rp{(order.price || 0).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1 bg-gray-200 rounded-full"
                        onClick={() => removeFromOrder(order.name)}
                      >
                        <FiMinus size={16} />
                      </button>
                      <span>{order.quantity}</span>
                      <button
                        className="p-1 bg-gray-200 rounded-full"
                        onClick={() => addToOrder(order.name, order.price)}
                      >
                        <FiPlus size={16} />
                      </button>
                    </div>
                  </div>
                ))}

                {/* TOTAL SECTION */}
                <div className="pt-4 border-t text-sm">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>Rp{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Tax (11%)</span>
                    <span>Rp{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span>Service</span>
                    <span>Rp{service.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>Rp{total.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full mt-4 py-2 rounded bg-[#836A41] text-white font-semibold"
                  >
                    PESAN
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
