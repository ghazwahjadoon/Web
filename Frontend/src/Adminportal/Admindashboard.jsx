import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function Admindashboard() {
  return (
    <>
      <div
        className="container-fluid d-flex"
        style={{
          background: "linear-gradient(to right, #fff5f8, #ffeef3)",
          minHeight: "100vh",
          fontFamily: "Poppins, sans-serif",
          overflowX: "hidden",
        }}
      >
        {/* 🌷 Sidebar */}
        <div
          className="p-4"
          style={{
            background: "linear-gradient(180deg, #ffcce0, #ffe6ee)",
            width: "270px",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
            boxShadow: "4px 0 15px rgba(255,182,193,0.4)",
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
        >
          <h2
            className="text-center mb-4"
            style={{
              color: "#b30059",
              fontFamily: "cursive",
              fontSize: "32px",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Admin Panel
          </h2>

          <ul className="nav flex-column">
            {/* Dashboard */}
            <li className="nav-item mb-3">
              <Link
                to="/admindashboard"
                className="nav-link"
                style={{
                  color: "#333",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  padding: "10px 15px",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                }}
               
              >
                Dashboard
              </Link>
            </li>

            {/* Products */}
            <li className="nav-item mb-3">
              <details>
                <summary
                  className="nav-link"
                  style={{
                    color: "#333",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "10px 15px",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    listStyle: "none",
                  }}
                >
                   Products
                </summary>
                <ul className="nav flex-column ms-3 mt-2">
                  <li className="nav-item mb-2">
                    <Link
                      to="/productlist"
                      className="nav-link text-dark"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#fffafc",
                        borderRadius: "8px",
                        padding: "6px 12px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      Product List
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/Addproduct"
                      className="nav-link text-dark"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#fffafc",
                        borderRadius: "8px",
                        padding: "6px 12px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      Add Product
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Reports */}
            <li className="nav-item mb-3">
              <details>
                <summary
                  className="nav-link"
                  style={{
                    color: "#333",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "10px 15px",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  Reports
                </summary>
                <ul className="nav flex-column ms-3 mt-2">
                  <li className="nav-item mb-2">
                    <Link
                      to="/salesreport"
                      className="nav-link text-dark"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#fffafc",
                        borderRadius: "8px",
                        padding: "6px 12px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      Sales Report
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Bookings */}
            <li className="nav-item mb-3">
              <details>
                <summary
                  className="nav-link"
                  style={{
                    color: "#333",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "10px 15px",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                   Bookings
                </summary>
                <ul className="nav flex-column ms-3 mt-2">
                  <li className="nav-item mb-2">
                    <Link
                      to="/bookingdetails"
                      className="nav-link text-dark"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#fffafc",
                        borderRadius: "8px",
                        padding: "6px 12px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      Booking Details
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/bookingList"
                      className="nav-link text-dark"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#fffafc",
                        borderRadius: "8px",
                        padding: "6px 12px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      Booking List
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Customers */}
            <li className="nav-item mb-3">
              <Link
                to="/admin/customers"
                className="nav-link"
                style={{
                  color: "#333",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  padding: "10px 15px",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                }}
              >
                 Customers
              </Link>
            </li>

            {/* Logout */}
            <li className="nav-item mt-auto text-center">
              <Link
                to="/logout"
                className="nav-link"
                style={{
                  color: "#b30059",
                  fontWeight: "bold",
                  marginTop: "25px",
                  fontSize: "16px",
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* 🌼 Main Content */}
        <div className="container-fluid p-5">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: "#fff",
              padding: "15px 25px",
              borderRadius: "20px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              marginBottom: "30px",
            }}
          >
            <h3
              style={{
                fontFamily: "cursive",
                fontWeight: "bold",
                color: "#b30059",
                margin: 0,
              }}
            >
               Admin Dashboard
            </h3>
            <CgProfile size={40} color="#b30059" />
          </div>

          <div
            className="text-center mt-5 p-5"
            style={{
              backgroundColor: "#fff",
              borderRadius: "25px",
              boxShadow: "0 5px 15px rgba(255,182,193,0.3)",
              color: "#555",
            }}
          >
            <h4 style={{ fontFamily: "cursive", color: "#b30059" }}>
              Welcome
            </h4>
            <p>Manage your beauty products, customers, and bookings here!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admindashboard;
