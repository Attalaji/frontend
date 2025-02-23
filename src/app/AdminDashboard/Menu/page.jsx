"use client";
import React, { useState } from "react";
import Sidebar from "../../components/AdminSidebar";
import AddMenuForm from "../../components/AddMenuForm"; // Import komponen form
import { MdDelete, MdEdit } from "react-icons/md";

const statusColors = {
  Tersedia: "bg-green-500 text-white",
  TidakTersedia: "bg-red-500 text-white",
};

function page() {
  // Data dummy untuk menu
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/150", // Gambar menu
      name: "Wagyu Ribeye",
      category: "Steak",
      price: 268000,
      status: "Tersedia",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Chicken Katsu",
      category: "Chicken",
      price: 65000,
      status: "Tersedia",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Spaghetti Carbonara",
      category: "Pasta",
      price: 55000,
      status: "TidakTersedia",
    },
  ]);

  // State untuk membuka form
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingMenu, setEditingMenu] = useState(null); // State untuk menu yang akan diedit

  // Fungsi untuk menambah menu
  const handleAddMenu = (newMenu) => {
    const updatedMenu = [
      { ...newMenu, id: menuItems.length + 1 }, // Menu baru di depan
      ...menuItems, // Menu yang sudah ada tetap berada setelah menu baru
    ];
    setMenuItems(updatedMenu); // Mengupdate state dengan menu yang baru
    setIsFormOpen(false); // Menutup form setelah menambahkan menu
  };

  // Fungsi untuk membuka form edit
  const handleEditMenu = (id) => {
    const menuToEdit = menuItems.find((item) => item.id === id);
    setEditingMenu(menuToEdit); // Pastikan menu yang dipilih akan diubah
    setIsFormOpen(true); // Buka form untuk edit menu
  };

  // Fungsi untuk memperbarui menu
  const handleUpdateMenu = (updatedMenu) => {
    const updatedMenuList = menuItems.map((item) =>
      item.id === updatedMenu.id ? updatedMenu : item
    );
    setMenuItems(updatedMenuList); // Set menu yang sudah diupdate
    setIsFormOpen(false); // Menutup form setelah update menu
  };

  // Fungsi untuk menghapus menu
  const handleDeleteMenu = (id) => {
    const updatedMenu = menuItems.filter((item) => item.id !== id);
    setMenuItems(updatedMenu);
  };

  // Fungsi untuk membuka form tambah menu dan mereset editingMenu
  const openAddMenuForm = () => {
    setEditingMenu(null); // Reset editingMenu agar form kosong
    setIsFormOpen(true); // Buka form
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 sm:ml-64 w-full min-h-screen bg-[#f1f1f1]">
        <h2 className="text-2xl font-bold mb-6 text-black">Halo, Admin</h2>
        <div className="flex justify-between mb-4">
          <button
            onClick={openAddMenuForm} // Gunakan fungsi ini untuk membuka form tambah menu
            className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
          >
            Tambah Menu
          </button>
        </div>
        <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 text-[#000]">No</th>
                <th className="p-3 text-[#000]">Gambar Menu</th>
                <th className="p-3 text-[#000]">Nama Menu</th>
                <th className="p-3 text-[#000]">Kategori</th>
                <th className="p-3 text-[#000]">Harga</th>
                <th className="p-3 text-[#000]">Status</th>
                <th className="p-3 text-[#000]"></th>
              </tr>
            </thead>
            <tbody className="flex-row items-center">
              {menuItems.map((item, index) => (
                <tr key={item.id} className="border-t text-black">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3">Rp{item.price.toLocaleString()}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-sm rounded ${
                        statusColors[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 gap-2">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => handleEditMenu(item.id)} // Buka form edit
                    >
                      <MdEdit size={20} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDeleteMenu(item.id)} // Hapus menu
                    >
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Form Tambah / Edit Menu */}
      <AddMenuForm
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        addMenu={handleAddMenu}
        updateMenu={handleUpdateMenu}
        editingMenu={editingMenu} // Mengirimkan menu yang sedang diedit
      />
    </div>
  );
}

export default page;
