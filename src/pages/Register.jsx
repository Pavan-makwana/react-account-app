import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

//  Registration Page
// Handles user signup with password validation and show/hide functionality
export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [alert, setAlert] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // toggle password visibility
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Password validation function
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!form.name || !form.email || !form.password) {
      setAlert({ type: "danger", message: "All fields are required!" });
      return;
    }

    if (!validatePassword(form.password)) {
      setAlert({
        type: "danger",
        message: "Password must be at least 6 characters, include 1 number and 1 uppercase letter.",
      });
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    setAlert({ type: "success", message: "Registration successful! Redirecting..." });
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {alert && (
          <div className={`alert alert-${alert.type} text-center`} role="alert">
            {alert.message}
          </div>
        )}
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
          <h3 className="text-center mb-4 text-primary">Register</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field with toggle */}
            <div className="mb-3 input-group">
              <input
                className="form-control"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <small className="text-muted">
              Password must have at least 6 characters, one uppercase letter, and one number.
            </small>

            <button className="btn btn-primary w-100 mt-3">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}
