import React from "react";

function Footer() {
  return (
    <>
      <footer className="text-center bg-light">
        {/* Social media section */}
        <div className="container py-4">
          <section className="mb-4 d-flex justify-content-center flex-wrap gap-3">
            <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
              <i className="fab fa-twitter"></i>
            </a>

            <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
              <i className="fab fa-google"></i>
            </a>

            <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
              <i className="fab fa-instagram"></i>
            </a>

            <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
              <i className="fab fa-linkedin"></i>
            </a>

            <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2020 Copyright:
          <a className="text-dark ms-1" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
