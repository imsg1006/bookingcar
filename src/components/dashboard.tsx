"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import bookingsData from "../../../bookings.json";

type Booking = {
  id: string;
  customer: string;
  vehicle: string;
  pickup: string;
  dropoff: string;
  status: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [filteredBookings, setFilteredBookings] =
    useState<Booking[]>(bookingsData);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleClick = (bookingId: string) => {
    if (loader) return;
    setLoader(true);
    router.push(`/booking/${bookingId}`);
  };

  const filterByDate = () => {
    if (!startDate && !endDate) {
      setFilteredBookings(bookingsData);
      return;
    }

    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const filtered = bookingsData.filter((booking) => {
      const pickup = new Date(booking.pickup);
      const dropoff = new Date(booking.dropoff);

      if (start && end) {
        return pickup >= start && dropoff <= end;
      } else if (start) {
        return pickup >= start;
      } else if (end) {
        return dropoff <= end;
      }
      return true;
    });

    setFilteredBookings(filtered);
  };

  useEffect(() => {
    filterByDate();
  }, [startDate, endDate]);

  // Stats
  const total = filteredBookings.length;
  const upcoming = filteredBookings.filter(
    (b) => new Date(b.pickup) > new Date()
  ).length;
  const cancelled = filteredBookings.filter(
    (b) => b.status === "Cancelled"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      {loader && (
        <div className="absolute inset-0  z-50 flex items-center justify-center">
          <Loader />
        </div>
      )}

      <h1 className="text-2xl font-bold mb-4">Vehicle Booking Dashboard</h1>

      {/* Date Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
        <label className="flex flex-col text-sm text-black">
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 border border-black rounded px-3 py-2 w-full bg-yellow-100 text-black"
          />
        </label>
        <label className="flex flex-col text-sm text-black">
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 border border-black rounded px-3 py-2 w-full bg-yellow-100 text-black"
          />
        </label>
        <button
          onClick={() => {
            setStartDate("");
            setEndDate("");
          }}
          className="mt-2 sm:mt-6 px-4 py-2 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400"
        >
          Clear Filter
        </button>
      </div>

      {/* Bookings Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-yellow-50 rounded-lg shadow-md">
          <thead>
            <tr className="bg-yellow-200 text-black">
              <th className="px-4 py-3 text-left">Booking ID</th>
              <th className="px-4 py-3 text-left">Customer Name</th>
              <th className="px-4 py-3 text-left">Vehicle Type</th>
              <th className="px-4 py-3 text-left">Pickup Date & Time</th>
              <th className="px-4 py-3 text-left">Drop-off Date & Time</th>
              <th className="px-4 py-3 text-left">Booking Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr
                key={booking.id}
                onClick={() => handleClick(booking.id)}
                className="border-t border-gray-200 hover:bg-yellow-100 cursor-pointer text-black"
              >
                <td className="px-4 py-3">{booking.id}</td>
                <td className="px-4 py-3">{booking.customer}</td>
                <td className="px-4 py-3">{booking.vehicle}</td>
                <td className="px-4 py-3">{booking.pickup}</td>
                <td className="px-4 py-3">{booking.dropoff}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-1 rounded text-sm font-medium ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
            {filteredBookings.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No bookings found for selected date range.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Stats Section */}
      <div className="grid mt-9 grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
  <div className="bg-yellow-200 shadow-md rounded-lg p-4 text-center text-black">
    <p className="text-sm">Total Bookings</p>
    <p className="text-xl font-semibold">{total}</p>
  </div>
  <div className="bg-yellow-200 shadow-md rounded-lg p-4 text-center text-black">
    <p className="text-sm">Upcoming</p>
    <p className="text-xl font-semibold">{upcoming}</p>
  </div>
  <div className="bg-yellow-200 shadow-md rounded-lg p-4 text-center text-black">
    <p className="text-sm">Cancelled</p>
    <p className="text-xl font-semibold">{cancelled}</p>
  </div>
</div>
    </div>
    
  );
}
