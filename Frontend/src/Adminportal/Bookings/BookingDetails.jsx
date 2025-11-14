import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BookingDetails() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    // Dummy booking data
    setBooking({
      id: 1,
      name: "Sara Khan",
      email: "sara@gmail.com",
      phone: "0321-4567890",
      service: "Bridal Makeup 💍",
      date: "2025-10-20",
      time: "2:00 PM",
      notes: "Needs heavy eye makeup with gold shimmer ✨",
      status: "Pending",
    });
  }, []);

  const handleApprove = () => {
    setBooking({ ...booking, status: "Approved" });
    alert("✅ Booking approved!");
  };

  const handleCancel = () => {
    setBooking({ ...booking, status: "Cancelled" });
    alert("❌ Booking cancelled.");
  };

  if (!booking) return <h3 style={{ textAlign: "center" }}>Loading...</h3>;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fff5f8, #ffeef3)",
        minHeight: "100vh",
        padding: "40px 0",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "90%",
          maxWidth: "600px",
          margin: "auto",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 5px 15px rgba(255,182,193,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#b30059",
            marginBottom: "20px",
            fontFamily: "cursive",
          }}
        >
          💖 Booking Details
        </h2>

        <p>
          <b style={{ color: "#b30059" }}>Client:</b> {booking.name}
        </p>
        <p>
          <b style={{ color: "#b30059" }}>Email:</b> {booking.email}
        </p>
        <p>
          <b style={{ color: "#b30059" }}>Phone:</b> {booking.phone}
        </p>
        <p>
          <b style={{ color: "#b30059" }}>Service:</b> {booking.service}
        </p>
        <p>
          <b style={{ color: "#b30059" }}>Date:</b> {booking.date}
        </p>
        <p>
          <b style={{ color: "#b30059" }}>Time:</b> {booking.time}
        </p>
        <p>
          <b style={{ color: "#b30059" }}>Notes:</b> {booking.notes}
        </p>
        <p>
          <b style={{ color: "#b30059" }}>Status:</b>{" "}
          <span
            style={{
              background:
                booking.status === "Approved"
                  ? "#d4f8d4"
                  : booking.status === "Cancelled"
                  ? "#ffd6d6"
                  : "#fff0f5",
              color:
                booking.status === "Approved"
                  ? "#228B22"
                  : booking.status === "Cancelled"
                  ? "#b30000"
                  : "#b30059",
              padding: "5px 10px",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            {booking.status}
          </span>
        </p>

        {/* Buttons Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "25px",
          }}
        >
          <button
            onClick={handleApprove}
            style={{
              background: "#ff9eb5",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            ✅ Approve
          </button>

          <button
            onClick={handleCancel}
            style={{
              background: "#ff6b81",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            ❌ Cancel
          </button>

          <Link
            to="/bookingList"
            style={{
              background: "#ffe6ee",
              color: "#b30059",
              border: "none",
              borderRadius: "10px",
              padding: "10px 20px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            🔙 Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
