"use client";
import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

const AddMenuForm = ({
  isFormOpen,
  setIsFormOpen,
  addMenu,
  updateMenu,
  editingMenu,
}) => {
  const [newMenu, setNewMenu] = useState({
    image: "",
    name: "",
    category: "",
    price: "",
    status: "",
  });

  const [errors, setErrors] = useState({
    image: "",
    name: "",
    category: "",
    price: "",
    status: "",
  });

  // Jika sedang mengedit menu, set state dengan menu yang akan diedit
  useEffect(() => {
    if (editingMenu) {
      setNewMenu({
        image: editingMenu.image || "",
        name: editingMenu.name || "",
        category: editingMenu.category || "",
        price: editingMenu.price || "",
        status: editingMenu.status || "",
      });
    }
  }, [editingMenu]);

  const handleSubmit = () => {
    let formErrors = {};
    let isValid = true;

    // Validasi inputan
    if (!newMenu.image) {
      formErrors.image = "Gambar menu wajib diisi!";
      isValid = false;
    }
    if (!newMenu.name) {
      formErrors.name = "Nama menu wajib diisi!";
      isValid = false;
    }
    if (!newMenu.category) {
      formErrors.category = "Kategori menu wajib diisi!";
      isValid = false;
    }
    if (!newMenu.price) {
      formErrors.price = "Harga menu wajib diisi!";
      isValid = false;
    }
    if (!newMenu.status) {
      formErrors.status = "Status menu wajib diisi!";
      isValid = false;
    }

    setErrors(formErrors); // Set error messages

    if (!isValid) return; // Jangan lanjutkan jika form tidak valid

    if (editingMenu) {
      // Jika sedang mengedit menu
      updateMenu({ ...newMenu, id: editingMenu.id }); // Memanggil fungsi updateMenu untuk menyimpan perubahan
    } else {
      // Menambah menu baru
      addMenu(newMenu);
    }
    setIsFormOpen(false); // Menutup form setelah menambah atau mengedit menu
    setNewMenu({ image: "", name: "", category: "", price: "", status: "" }); // Reset form
    setErrors({}); // Reset error messages
  };

  return (
    isFormOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-[#C59E5F] shadow-lg w-1/2">
          <div className="flex px-6 py-4 justify-between items-center text-white">
            <h3 className="text-lg font-bold">Form</h3>
            <button onClick={() => setIsFormOpen(false)}>
              <MdClose size={24} />
            </button>
          </div>
          <div className="bg-white p-6">
            <div className="mb-4">
              <label className="block text-sm mb-2">Gambar Menu</label>
              <input
                type="file"
                className="border p-2 w-full"
                onChange={(e) =>
                  setNewMenu({ ...newMenu, image: e.target.files[0] })
                }
              />
              {errors.image && (
                <p className="text-red-500 text-xs mt-1">{errors.image}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Nama Menu</label>
              <input
                type="text"
                value={newMenu.name}
                onChange={(e) =>
                  setNewMenu({ ...newMenu, name: e.target.value })
                }
                className="border p-2 w-full"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Kategori</label>
              <select
                value={newMenu.category}
                onChange={(e) =>
                  setNewMenu({ ...newMenu, category: e.target.value })
                }
                className="border p-2 w-full"
                required
              >
                <option value="">Pilih Kategori</option>
                <option value="Steak">Steak</option>
                <option value="Chicken">Chicken</option>
                <option value="Nasi Goreng">Nasi Goreng</option>
                <option value="Pasta">Pasta</option>
                <option value="Paket">Paket</option>
                <option value="Minuman">Minuman</option>
                <option value="Sides">Sides</option>
                <option value="Desserts">Desserts</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-xs mt-1">{errors.category}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Harga</label>
              <input
                type="number"
                value={newMenu.price}
                onChange={(e) =>
                  setNewMenu({
                    ...newMenu,
                    price: parseInt(e.target.value, 10),
                  })
                }
                className="border p-2 w-full"
                required
              />
              {errors.price && (
                <p className="text-red-500 text-xs mt-1">{errors.price}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Status</label>
              <select
                value={newMenu.status}
                onChange={(e) =>
                  setNewMenu({ ...newMenu, status: e.target.value })
                }
                className="border p-2 w-full"
                required
              >
                <option value="">Pilih Status</option>
                <option value="Tersedia">Tersedia</option>
                <option value="TidakTersedia">Tidak Tersedia</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-xs mt-1">{errors.status}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-[#45A63D] hover:bg-[#347d2e] text-white py-2 px-4 rounded flex items-center gap-2"
              >
                <IoIosSave />
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AddMenuForm;