import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function Admindashboard() {
  return (
    <>
      <div
        className="container-fluid  d-flex"
        style={{
          backgroundColor: "#fff5f8",
          minHeight: "100vh",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {/* Sidebar */}
        <div
          className="p-4"
          style={{
            backgroundColor: "#fbdce2",
            width: "270px",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            className="text-center mb-4"
            style={{
              color: "#b30059",
              fontFamily: "Bradley Hand ITC",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Admin Panel
          </h2>

          <ul className="nav flex-column">
            
            <li className="nav-item mb-2">
              <Link
                to="/admindashboard"
                className="nav-link"
                style={{
                  color: "#333",
                  backgroundColor: "#ffe6ee",
                  borderRadius: "10px",
                  marginBottom: "5px",
                }}
              >
                Dashboard
              </Link>
            </li>

           
            <li className="nav-item mb-2">
              <details>
                <summary
                  className="nav-link"
                  style={{
                    color: "#333",
                    backgroundColor: "#ffe6ee",
                    borderRadius: "10px",
                  }}
                >
                  Products
                </summary>
                <ul className="nav flex-column ms-3 mt-2">
                  <li className="nav-item mb-1">
                    <Link
                      to="/productlist"
                      className="nav-link text-dark"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        marginBottom: "4px",
                        padding: "6px 10px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      Product List
                    </Link>
                  </li>
                  <li className="nav-item mb-1">
                    <Link
                      to="/Addproduct"
                      className="nav-link text-dark"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        marginBottom: "4px",
                        padding: "6px 10px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      Add Product
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

          
            <li className="nav-item mb-2">
              <details>
                <summary
                  className="nav-link"
                  style={{
                    color: "#333",
                    backgroundColor: "#ffe6ee",
                    borderRadius: "10px",
                  }}
                >
                  Reports
                </summary>
                <ul className="nav flex-column ms-3 mt-2">
                  <li className="nav-item mb-1">
                    <Link
                      to="/salesreport"
                      className="nav-link text-dark"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        marginBottom: "4px",
                        padding: "6px 10px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      Sales Report
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

           
            <li className="nav-item mb-2">
              <details>
                <summary
                  className="nav-link"
                  style={{
                    color: "#333",
                    backgroundColor: "#ffe6ee",
                    borderRadius: "10px",
                  }}
                >
                  Bookings
                </summary>
                <ul className="nav flex-column ms-3 mt-2">
                  <li className="nav-item mb-1">
                    <Link
                      to="/bookingdetails"
                      className="nav-link text-dark"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        marginBottom: "4px",
                        padding: "6px 10px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      Booking Details
                    </Link>
                  </li>
                  <li className="nav-item mb-1">
                    <Link
                      to="/bookingList"
                      className="nav-link text-dark"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        marginBottom: "4px",
                        padding: "6px 10px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      Booking List
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

           
            <li className="nav-item mb-2">
              <Link
                to="/admin/customers"
                className="nav-link"
                style={{
                  color: "#333",
                  backgroundColor: "#ffe6ee",
                  borderRadius: "10px",
                  marginBottom: "5px",
                }}
              >
                Customers
              </Link>
            </li>

           
            <li className="nav-item mt-auto">
              <Link
                to="/logout"
                className="nav-link"
                style={{
                  color: "#cc0044",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>

      
        <div className="container-fluid p-4">
          <div
            className="d-flex justify-content-between "
            style={{
              backgroundColor: "#ffeef3",
              padding: "15px 20px",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3
              style={{
                fontFamily: "Bradley Hand ITC",
                fontWeight: "bold",
                color: "#b30059",
                margin: 0,
              }}
            >
              Admin Dashboard
            </h3>
            <CgProfile size={35} color="#b30059" />
          </div>

          <div
            className="text-center mt-5"
            style={{
              color: "#555",
            }}
          >
            <h4 style={{ fontFamily: "Bradley Hand ITC", color: "#cc0044" }}>
              Welcome 
            </h4>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Admindashboard;
