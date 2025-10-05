import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h4 className="text-warning fw-bold">Mern E-commerce</h4>
            <p>
              Your one-stop destination for quality products at unbeatable prices.
              Shop smart, shop easy — anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light fs-4">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        {/* Bottom Text */}
        <div className="text-center pb-3">
          <p className="mb-0">
            © {new Date().getFullYear()} <span className="text-warning fw-bold">Mern E-commerce</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
