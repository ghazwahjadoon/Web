import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function BookingDetails() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    // Dummy booking data
    setBooking({
      id: 1,
      name: "Sara Khan",
      email: "sara@gmail.com",
      phone: "0321-4567890",
      service: "Bridal Makeup",
      date: "2025-10-20",
      time: "2:00 PM",
      notes: "Needs heavy eye makeup.",
      status: "Pending",
    });
  }, []);

  if (!booking) return <p>Loading...</p>;

  return (
    <div className="container p-4">
      <h3 className="mb-3">Booking Details</h3>

      <div className="card p-3 shadow-sm">
        <p><b>Client:</b> {booking.name}</p>
        <p><b>Email:</b> {booking.email}</p>
        <p><b>Phone:</b> {booking.phone}</p>
        <p><b>Service:</b> {booking.service}</p>
        <p><b>Date:</b> {booking.date}</p>
        <p><b>Time:</b> {booking.time}</p>
        <p><b>Notes:</b> {booking.notes}</p>
        <p><b>Status:</b> {booking.status}</p>

        <div className="mt-3">
          <button className="btn btn-success me-2">Approve</button>
          <button className="btn btn-danger me-2">Cancel</button>
          <Link to="/bookingList" className="btn btn-secondary">
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
