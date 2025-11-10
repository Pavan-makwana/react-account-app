import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

//  Landing Page 

// Shown first when app runs  offers Login or Register buttons
export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <div className="card p-5 shadow mx-auto" style={{ maxWidth: "500px" }}>
          <h2 className="text-primary mb-4">Welcome to React Account App</h2>
          <p className="text-secondary mb-4">
            Manage your account easily  register, login, and edit your details.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-success" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn btn-primary" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
