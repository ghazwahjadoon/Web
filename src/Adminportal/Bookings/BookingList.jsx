import { useState } from "react";

function BookingList() {
  const [bookings] = useState([
    { id: 1, name: "Sara Khan", service: "Bridal Makeup", date: "2025-10-20", time: "2:00 PM", status: "Pending" },
    { id: 2, name: "Ayesha Malik", service: "Party Makeup", date: "2025-10-22", time: "4:00 PM", status: "Approved" },
    { id: 3, name: "Noor Fatima", service: "Nikkah Look", date: "2025-10-25", time: "1:30 PM", status: "Cancelled" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Booking List</h3>

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", textAlign: "left" }}>
        <thead style={{ backgroundColor: "#f8d7da" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.name}</td>
              <td>{b.service}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingList;
