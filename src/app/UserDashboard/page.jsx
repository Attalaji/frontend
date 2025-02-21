"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";

const menuItems = [
  // SOFT DRINKS
  { name: "Coca Cola", category: "Minuman", price: 17000 },
  { name: "Sweet Tea (Hot)", category: "Minuman", price: 20000 },
  { name: "Sweet Tea (Ice)", category: "Minuman", price: 20000 },
  { name: "Plain Tea (Hot)", category: "Minuman", price: 17000 },
  { name: "Plain Tea (Ice)", category: "Minuman", price: 17000 },
  { name: "Lemon Tea", category: "Minuman", price: 23000 },

  // MINERAL WATER & OTHERS
  { name: "Air Mineral", category: "Minuman", price: 15000 },
  { name: "Sarabba", category: "Minuman", price: 17000 },
  { name: "Kopi Susu", category: "Minuman", price: 20000 },
  { name: "Black Coffee", category: "Minuman", price: 15000 },

  // MOCKTAILS & JUICES
  { name: "Orange Float", category: "Minuman", price: 36700 },
  { name: "Lychee Tea", category: "Minuman", price: 23000 },
  { name: "Red Lime Mocktail", category: "Minuman", price: 30000 },
  { name: "Lemon Squash", category: "Minuman", price: 28000 },
  { name: "Orange Squash", category: "Minuman", price: 28000 },
  { name: "Soda Gembira", category: "Minuman", price: 30000 },
  { name: "Dragonfruit Juice", category: "Minuman", price: 35000 },
  { name: "Avocado Juice", category: "Minuman", price: 35000 },
  { name: "Apple Juice", category: "Minuman", price: 25000 },
  { name: "Mango Juice", category: "Minuman", price: 39000 },
  { name: "Orange Juice", category: "Minuman", price: 35000 },
  { name: "Watermelon Juice", category: "Minuman", price: 33000 },
  { name: "Melon Juice", category: "Minuman", price: 39000 },

  // MILKSHAKES
  { name: "Banana Split", category: "Minuman", price: 28000 },
  { name: "Milkshake Vanilla", category: "Minuman", price: 40500 },
  { name: "Milky Shake", category: "Minuman", price: 43500 },
  { name: "Milkshake Strawberry", category: "Minuman", price: 40500 },
  { name: "Cookies Shake", category: "Minuman", price: 43500 },
  { name: "Milkshake Chocolate", category: "Minuman", price: 40500 },

  // TEA & COFFEE
  { name: "Green Day", category: "Minuman", price: 35000 },
  { name: "Green Tea Latte", category: "Minuman", price: 39000 },
  { name: "Green Tea Milk", category: "Minuman", price: 36000 },
  { name: "Thai Milk Tea", category: "Minuman", price: 36000 },
  { name: "Thai Tea", category: "Minuman", price: 36000 },
  { name: "Black Avocado", category: "Minuman", price: 40200 },
  { name: "Ice Chocolate", category: "Minuman", price: 39000 },
  { name: "Ice Moccacino", category: "Minuman", price: 36000 },
  { name: "Ice Coffee Latte", category: "Minuman", price: 36000 },
  { name: "Ice Cappuccino", category: "Minuman", price: 36000 },

  // STEAK
  { name: "Wagyu Ribeye", category: "Steak", price: 268000 },
  { name: "Supreme Sirloin (Regular)", category: "Steak", price: 126000 },
  { name: "Supreme Sirloin (Large)", category: "Steak", price: 149900 },
  { name: "Wagyu Sirloin", category: "Steak", price: 247000 },
  { name: "Prime Lamb Chop", category: "Steak", price: 136250 },
  { name: "Prime Rib Eye", category: "Steak", price: 125000 },
  { name: "Prime Tenderloin Steak (Regular)", category: "Steak", price: 99500 },
  { name: "Prime Tenderloin Steak (Large)", category: "Steak", price: 120500 },
  { name: "Grill Salmon", category: "Steak", price: 138000 },

  // CHICKEN DISHES
  { name: "Chicken Crispy", category: "Chicken", price: 65000 },
  { name: "Chicken Crispy Cheese", category: "Chicken", price: 68000 },
  { name: "Chicken Katsu", category: "Chicken", price: 38000 },
  { name: "Chicken Cordon Bleu", category: "Chicken", price: 65000 },
  { name: "Chicken Steak (Regular)", category: "Chicken", price: 68000 },
  { name: "Chicken Steak (Large)", category: "Chicken", price: 81000 },

  // PASTA
  { name: "Sweet Italian (Beef)", category: "Pasta", price: 65000 },
  { name: "Sweet Italian (Chicken)", category: "Pasta", price: 58000 },
  { name: "Stroganoff (Beef)", category: "Pasta", price: 65000 },
  { name: "Stroganoff (Chicken)", category: "Pasta", price: 57000 },
  { name: "Spaghetti Bolognese", category: "Pasta", price: 35000 },
  { name: "Spaghetti Carbonara", category: "Pasta", price: 55000 },
  { name: "Spaghetti Salmon Aglio Olio", category: "Pasta", price: 62000 },

  // FRIED RICE (NASI GORENG)
  { name: "Nasi Goreng Crispy", category: "Nasi Goreng", price: 55000 },
  { name: "Nasi Goreng Daging", category: "Nasi Goreng", price: 56000 },
  { name: "Nasi Goreng Merah", category: "Nasi Goreng", price: 50000 },
  { name: "Nasi Goreng Seafood", category: "Nasi Goreng", price: 55000 },

  // SIDES
  { name: "Mashed Potato", category: "Sides", price: 38000 },
  { name: "Potato Wedges", category: "Sides", price: 45000 },
  { name: "French Fries", category: "Sides", price: 35000 },
  { name: "Salad Sayur", category: "Sides", price: 27000 },
  { name: "Salad Buah", category: "Sides", price: 40000 },
  { name: "Mix Vegetable", category: "Sides", price: 32000 },
  { name: "Nasi Putih", category: "Sides", price: 10000 },

  // DESSERTS
  { name: "Pisang Coklat Keju", category: "Desserts", price: 28200 },
  { name: "Pisang Coklat", category: "Desserts", price: 25200 },
  { name: "Barongko", category: "Desserts", price: 36000 },

  // COMBO MEALS (PAKET)
  { name: "Paket 1: Sirloin & Chicken", category: "Paket", price: 157000 },
  { name: "Paket 2: Prime Sirloin Special & Chicken", category: "Paket", price: 146500 },
  { name: "Paket 3: 2 Chicken Steak & Nasi", category: "Paket", price: 136000 },
  { name: "Paket 4: Tenderloin & Sirloin", category: "Paket", price: 188000 },
  { name: "Paket 5: Tenderloin & Chicken", category: "Paket", price: 168000 },
];

function page() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [orders, setOrders] = useState([]);

  // Filter menu berdasarkan kategori yang dipilih
  const filteredMenu =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  // Fungsi Tambah Pesanan
  const addToOrder = (menuName, price) => {
    const existingOrder = orders.find((order) => order.name === menuName);
    if (existingOrder) {
      setOrders(
        orders.map((order) =>
          order.name === menuName
            ? { ...order, quantity: order.quantity + 1 }
            : order
        )
      );
    } else {
      setOrders([...orders, { name: menuName, price, quantity: 1 }]);
    }
  };

  // Fungsi Hapus Pesanan
  const removeFromOrder = (menuName) => {
    const existingOrder = orders.find((order) => order.name === menuName);
    if (existingOrder.quantity > 1) {
      setOrders(
        orders.map((order) =>
          order.name === menuName
            ? { ...order, quantity: order.quantity - 1 }
            : order
        )
      );
    } else {
      setOrders(orders.filter((order) => order.name !== menuName));
    }
  };  

  // Kalkulasi Harga
  const subtotal = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);
  const tax = subtotal * 0.11;
  const service = 15000;
  const total = subtotal + tax + service;

  return (
    <div className="flex">
      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} setSelectedCategory={setSelectedCategory} />
      <main className="p-4 sm:ml-64 w-full min-h-screen bg-[#f1f1f1]">
        <h2 className="text-2xl font-bold mb-6">Halo, [nama]</h2>
        <div className="flex gap-8">
          {/* MENU SECTION */}
          <div className="grid grid-cols-3 w-full gap-6">
            {filteredMenu.map((menu, index) => (
              <div key={index} className="bg-white p-4 max-h-fit rounded-lg shadow">
                <img
                  src="https://via.placeholder.com/150"
                  alt={menu.name}
                  className="rounded-lg w-full h-40 object-cover mb-3"
                />
                <h3 className="text-lg font-semibold">{menu.name}</h3>
                <p className="text-gray-600 mb-3">Rp{menu.price.toLocaleString()}</p>
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
                  <div key={index} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium">{order.name}</p>
                      <p className="text-sm text-gray-500">Rp{order.price.toLocaleString()}</p>
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
                  <button className="w-full mt-4 py-2 rounded bg-[#836A41] text-white font-semibold">
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

