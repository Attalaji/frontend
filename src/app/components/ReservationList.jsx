import React, { useEffect, useState } from "react";

export default function ReservationList() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch reservations from backend
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/reservasi");
        if (!response.ok) {
          throw new Error("Gagal mengambil data reservasi");
        }
        const data = await response.json();
        setReservations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6 text-black">Daftar Reservasi</h2>
      {reservations.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada reservasi.</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 text-[#000]">No</th>
              <th className="p-3 text-[#000]">Nama</th>
              <th className="p-3 text-[#000]">Tanggal & Waktu</th>
              <th className="p-3 text-[#000]">Jumlah Orang</th>
              <th className="p-3 text-[#000]">Status</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={reservation.id} className="border-t text-black">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{reservation.nama}</td>
                <td className="p-3">{reservation.tanggal_waktu}</td>
                <td className="p-3">{reservation.jumlah_orang}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      reservation.status === "Menunggu"
                        ? "bg-yellow-500 text-white"
                        : reservation.status === "Diterima"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {reservation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}