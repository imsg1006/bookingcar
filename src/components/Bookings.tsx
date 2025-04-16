"use client";
 
import React from "react";
import bookingsData  from "../../../bookings.json";
import { TextGenerateEffectDemo } from "./Text";

const mockBookings: Record<string, {
  customer: string;
  vehicle: string;
  pickup: string;
  dropoff: string;
  status: "Confirmed" | "Pending" | "Cancelled";
}> = {
  BKG001: {
    customer: "Alice Johnson",
    vehicle: "Sedan",
    pickup: "2025-04-20 10:00 AM",
    dropoff: "2025-04-22 4:00 PM",
    status: "Confirmed",
  },
  BKG002: {
    customer: "Bob Smith",
    vehicle: "SUV",
    pickup: "2025-04-18 9:00 AM",
    dropoff: "2025-04-19 6:00 PM",
    status: "Pending",
  },
  BKG003: {
    customer: "Claire Brown",
    vehicle: "Hatchback",
    pickup: "2025-04-21 8:00 AM",
    dropoff: "2025-04-23 12:00 PM",
    status: "Cancelled",
  },
};

export default function BookingDetails({id}:{id : string}) {
   

  if (!id || typeof id !== "string") {
    return <div className="p-6">Loading...</div>;
  }

  const booking = mockBookings[id];

  if (!booking) {
    return <div className="p-6">Booking not found.</div>;
  }

  return (
    <div className="text-3xl mt-10 ml-5">
       
        <TextGenerateEffectDemo/>
         
    <div className="min-h-screen p-6 bg-yellow-100">
      <h1 className="text-2xl font-bold mb-4">Booking Details - {id}</h1>
      <div className="bg-white p-6 rounded shadow-md space-y-4">
        <div><strong>Customer:</strong> {booking.customer}</div>
        <div><strong>Vehicle Type:</strong> {booking.vehicle}</div>
        <div><strong>Pickup:</strong> {booking.pickup}</div>
        <div><strong>Drop-off:</strong> {booking.dropoff}</div>
        <div>
          <strong>Status:</strong>{" "}
          <span className={`px-2 py-1 rounded text-sm font-medium ${
            booking.status === "Confirmed"
              ? "bg-green-100 text-green-800"
              : booking.status === "Pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}>
            {booking.status}
          </span>
        </div>
        <div className="flex space-x-4 mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Edit
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Cancel
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
