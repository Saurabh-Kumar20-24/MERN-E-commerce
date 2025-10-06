import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { setFilteredData, products, logout, isAuthenticated, cart } =
    useContext(AppContext);

  const filterbyCategory = (cat) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() === cat.toLowerCase()
      )
    );
  };

  const filterbyPrice = (price) => {
    setFilteredData(products.filter((data) => data.price >= price));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm.trim()}`);
    setSearchTerm("");
  };

  return (
    <>
      {/* ====== MAIN NAVBAR ====== */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand fw-bold d-flex align-items-center"
            to="/"
          >
            <span
              style={{
                color: "#0d6efd",
                fontWeight: "700",
                fontSize: "1.6rem",
              }}
            >
              MERN
            </span>
            <span
              style={{
                color: "#f5f5f5",
                marginLeft: "6px",
                fontSize: "1.4rem",
              }}
            >
              E-Commerce
            </span>
          </Link>

          {/* Hamburger button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navbar Content */}
          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
            id="navbarNav"
          >
            {/* Search bar */}
            <form
              className="d-flex mx-auto my-2 my-lg-0"
              onSubmit={submitHandler}
              style={{ maxWidth: "400px", width: "100%" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Products..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">
                <span className="material-symbols-outlined">search</span>
              </button>
            </form>

            {/* Auth Buttons */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isAuthenticated ? (
                <>
                  <li className="nav-item mx-2">
                    <Link
                      to="/cart"
                      className="btn btn-primary position-relative"
                    >
                      <span className="material-symbols-outlined">
                        shopping_cart
                      </span>
                      {cart?.items?.length > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {cart.items.length}
                        </span>
                      )}
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link to="/profile" className="btn btn-info">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item mx-2">
                    <Link to="/login" className="btn btn-secondary">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link to="/register" className="btn btn-info">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* ====== FILTER SECTION (Only on Home Page) ====== */}
      {location.pathname === "/" && (
        <div className="bg-light border-top py-2">
          <div className="container text-center">
            {/* Desktop View — always visible */}
            <div className="d-none d-lg-flex flex-wrap justify-content-center gap-3">
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => setFilteredData(products)}
              >
                No Filter
              </button>
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => filterbyCategory("mobiles")}
              >
                Mobiles
              </button>
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => filterbyCategory("laptops")}
              >
                Laptops
              </button>
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => filterbyCategory("cameras")}
              >
                Cameras
              </button>
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => filterbyCategory("headphones")}
              >
                Headphones
              </button>
              {[15999, 25999, 49999, 69999, 89999].map((price) => (
                <button
                  key={price}
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => filterbyPrice(price)}
                >
                  ₹{price}
                </button>
              ))}
            </div>

            {/* Mobile View — collapsible */}
            <div className="d-lg-none">
              <button
                className="btn btn-dark w-100 mt-2"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                {isFilterOpen ? "Hide Filters ▲" : "Show Filters ▼"}
              </button>

              {isFilterOpen && (
                <div className="mt-3 d-flex flex-wrap justify-content-center gap-2">
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => setFilteredData(products)}
                  >
                    No Filter
                  </button>
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => filterbyCategory("mobiles")}
                  >
                    Mobiles
                  </button>
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => filterbyCategory("laptops")}
                  >
                    Laptops
                  </button>
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => filterbyCategory("cameras")}
                  >
                    Cameras
                  </button>
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => filterbyCategory("headphones")}
                  >
                    Headphones
                  </button>
                  {[15999, 25999, 49999, 69999, 89999].map((price) => (
                    <button
                      key={price}
                      className="btn btn-outline-dark btn-sm"
                      onClick={() => filterbyPrice(price)}
                    >
                      ₹{price}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
