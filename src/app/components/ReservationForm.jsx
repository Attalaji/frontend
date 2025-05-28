import { useState } from "react";
import axios from "axios";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    nama: "",
    jumlahOrang: "",
    email: "",
    telepon: "",
    tanggal: "",
    waktu: "",
    pesan: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.nama.trim()) newErrors.nama = "Nama wajib diisi";
    if (!formData.jumlahOrang.trim() || isNaN(formData.jumlahOrang))
      newErrors.jumlahOrang = "Masukkan jumlah orang yang valid";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Gunakan email @gmail.com";
    }
    if (!formData.telepon.trim() || !/^\d+$/.test(formData.telepon))
      newErrors.telepon = "Masukkan nomor yang valid (hanya angka)";
    if (!formData.tanggal.trim()) newErrors.tanggal = "Tanggal wajib diisi";
    if (!formData.waktu.trim()) newErrors.waktu = "Waktu wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      nama: formData.nama,
      jumlah_orang: formData.jumlahOrang,
      tanggal_waktu: `${formData.tanggal} ${formData.waktu}`,
      telepon: formData.telepon,
      email: formData.email,
      pesan: formData.pesan,
    };

    try {
      await axios.post("http://localhost:8000/api/reservasi", payload);
      alert("Reservasi berhasil dikirim!");
      setFormData({
        nama: "",
        jumlahOrang: "",
        email: "",
        telepon: "",
        tanggal: "",
        waktu: "",
        pesan: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Gagal kirim:", error);
      alert("Terjadi kesalahan saat mengirim reservasi.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            value={formData.nama}
            onChange={handleChange}
            className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2 placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
          />
          {errors.nama && <p className="text-red-500 text-sm">{errors.nama}</p>}
        </div>

        <div>
          <input
            type="number"
            name="jumlahOrang"
            placeholder="Jumlah orang"
            value={formData.jumlahOrang}
            onChange={handleChange}
            className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2 placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
          />
          {errors.jumlahOrang && (
            <p className="text-red-500 text-sm">{errors.jumlahOrang}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2 placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            name="telepon"
            placeholder="Nomor Telepon"
            value={formData.telepon}
            onChange={handleChange}
            className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2 placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
          />
          {errors.telepon && (
            <p className="text-red-500 text-sm">{errors.telepon}</p>
          )}
        </div>

        <div>
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2 focus:outline-none focus:border-[#C59E5F]/80 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
          />
          {errors.tanggal && (
            <p className="text-red-500 text-sm">{errors.tanggal}</p>
          )}
        </div>

        <div>
          <input
            type="time"
            name="waktu"
            value={formData.waktu}
            onChange={handleChange}
            className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2 focus:outline-none focus:border-[#C59E5F]/80 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
          />
          {errors.waktu && (
            <p className="text-red-500 text-sm">{errors.waktu}</p>
          )}
        </div>
      </div>

      <div>
        <textarea
          name="pesan"
          placeholder="Pesan"
          rows={4}
          value={formData.pesan}
          onChange={handleChange}
          className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2 placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80 resize-none"
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-8 py-2 rounded transition-colors bg-[#836A41] hover:bg-[#C59E5F]"
        >
          Kirim
        </button>
      </div>
    </form>
  );
}