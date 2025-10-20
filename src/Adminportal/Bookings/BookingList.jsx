import { Link } from "react-router-dom";
import { useState } from "react";

function BookingList() {
  const [bookings, setBookings] = useState([
    { id: 1, name: "Sara Khan", service: "Bridal Makeup", date: "2025-10-20", time: "2:00 PM", status: "Pending" },
    { id: 2, name: "Ayesha Malik", service: "Party Makeup", date: "2025-10-22", time: "4:00 PM", status: "Approved" },
    { id: 3, name: "Noor Fatima", service: "Nikkah Look", date: "2025-10-25", time: "1:30 PM", status: "Cancelled" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  return (
    <div className="p-4">
      <h3>All Bookings</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Client</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, index) => (
            <tr key={b.id}>
              <td>{index + 1}</td>
              <td>{b.name}</td>
              <td>{b.service}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>
                <span
                  className={`badge ${
                    b.status === "Approved"
                      ? "bg-success"
                      : b.status === "Cancelled"
                      ? "bg-danger"
                      : "bg-warning text-dark"
                  }`}
                >
                  {b.status}
                </span>
              </td>
              <td>
                <Link to={`/admin/bookings/${b.id}`} className="btn btn-sm btn-info me-2">View</Link>
                <button onClick={() => handleStatusChange(b.id, "Approved")} className="btn btn-sm btn-success me-1">Approve</button>
                <button onClick={() => handleStatusChange(b.id, "Cancelled")} className="btn btn-sm btn-danger">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BookingList;
