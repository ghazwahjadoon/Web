import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Signin() {
  return (
    <>
      <div className="container-fluid bg-light vh-100 d-flex flex-column justify-content-center align-items-center ">
        <div
          className="card shadow-lg p-4 border-0"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "20px",
            backgroundColor: "white",
          }}
        >
          <h3
            className="text-center mb-4"
            style={{
              fontFamily: "Times New Roman",
              color: "lightpink",
              fontWeight: "bold",
            }}
          >
            --- SIGN IN ---
          </h3>

          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="inputFullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFullName"
                placeholder="Your full name"
              />
            </div>

            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>

            <div className="col-12">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Enter your city"
              />
            </div>

            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn w-50"
                style={{
                  backgroundColor: "lightpink",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "10px",
                }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
