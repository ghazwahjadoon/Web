import models from "./assets/models1.jpg";

function Booking() {
  return (
    <>
      <div className="container py-5">
        <div
          className="row align-items-center bg-light rounded-4  p-4"
          style={{ border: "2px solid #b04bbb" }}
        >
          <div className="col-12 col-md-6">
            <h1
              className="mb-4"
              style={{
                fontFamily: "Bradley Hand ITC, cursive",
                color: "#a020f0",
                fontWeight: "bold",
              }}
            >
              Book Now
            </h1>

            <form>
              
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>

             
              <div className="mb-3">
                <label className="form-label fw-semibold">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@email.com"
                />
              </div>

             
              <div className="mb-3">
                <label className="form-label fw-semibold">Phone#:</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="+92 3xx xxx xxxx"
                />
              </div>

             
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Preferred Method Of Contact:
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="contact"
                      id="emailContact"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="emailContact"
                      className="form-check-label"
                    >
                      Email
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="contact"
                      id="phoneContact"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="phoneContact"
                      className="form-check-label"
                    >
                      Phone#
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="contact"
                      id="eitherContact"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="eitherContact"
                      className="form-check-label"
                    >
                      Either
                    </label>
                  </div>
                </div>
              </div>

              
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Services Required:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Bridal Makeup, Party Makeup..."
                />
              </div>

             
              <div className="mb-3">
                <label className="form-label fw-semibold">Date and Time:</label>
                <input type="datetime-local" className="form-control" />
              </div>

             
              <button
                type="button"
                className="btn btn-danger px-4 py-2 fw-semibold mt-2"
              >
                Confirm Booking
              </button>
            </form>
          </div>

          
          <div className="col-12 col-md-6 text-center">
            <img
              src={models}
              alt="Model"
              className="img-fluid rounded-4 "
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
