"use client";
import React from "react";
import Sidebar from "../../components/AdminSidebar";
import ReservationList from "../../components/ReservationList";

export default function page() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 sm:ml-64 w-full min-h-screen bg-[#f1f1f1]">
        <ReservationList />
      </main>
    </div>
  );
}