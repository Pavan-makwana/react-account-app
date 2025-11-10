import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUser, isAuthenticated, logout } from "../utils/auth";

// Navbar Component

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = getUser();
  const loggedIn = isAuthenticated();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
      <div className="container-fluid">
        <span
          className="navbar-brand fw-semibold"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(loggedIn ? "/home" : "/")}
        >
          React Account App
        </span>

        {/* Conditional Buttons */}
        <div className="d-flex align-items-center">
          {loggedIn ? (
            <>
              <span className="me-3 text-light">
                 {user?.name ? `Welcome, ${user.name}` : "Welcome"}
              </span>
              {location.pathname !== "/account" && (
                <button
                  className="btn btn-light btn-sm me-2"
                  onClick={() => navigate("/account")}
                >
                  Account Settings
                </button>
              )}
              <button className="btn btn-danger btn-sm" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              {location.pathname === "/register" ? (
                <button
                  className="btn btn-light btn-sm"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              ) : (
                <button
                  className="btn btn-light btn-sm"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
