import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    nomor: "",
    subjek: "",
    pesan: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.nama.trim()) newErrors.nama = "Nama wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Gunakan email @gmail.com";
    }
    if (!formData.nomor.trim() || !/^\d+$/.test(formData.nomor))
      newErrors.nomor = "Masukkan nomor yang valid (hanya angka)";
    if (!formData.subjek.trim()) newErrors.subjek = "Subjek wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form berhasil dikirim!");
      // Lakukan pengiriman data ke backend di sini
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Nama */}
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

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2 placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Nomor */}
      <div>
        <input
          type="tel"
          name="nomor"
          placeholder="Nomor"
          value={formData.nomor}
          onChange={handleChange}
          className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2 placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
        />
        {errors.nomor && <p className="text-red-500 text-sm">{errors.nomor}</p>}
      </div>

      {/* Subjek */}
      <div>
        <input
          type="text"
          name="subjek"
          placeholder="Subjek"
          value={formData.subjek}
          onChange={handleChange}
          className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2 placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
        />
        {errors.subjek && (
          <p className="text-red-500 text-sm">{errors.subjek}</p>
        )}
      </div>

      {/* Pesan */}
      <div>
        <textarea
          name="pesan"
          placeholder="Pesan"
          rows={5}
          value={formData.pesan}
          onChange={handleChange}
          className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2 placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80 resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
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
