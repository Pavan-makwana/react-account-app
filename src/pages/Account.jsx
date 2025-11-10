import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { isAuthenticated, getUser } from "../utils/auth";

//  Account Settings Page

// Allows user to update info with password validation & show/hide toggle
export default function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) navigate("/login");
    const data = getUser();
    if (data) setUser(data);
  }, [navigate]);

  // Handle form input change
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  // Password validation function
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
  };

  // Save account changes
  const handleSave = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      setAlert({ type: "danger", message: "All fields are required!" });
      return;
    }

    if (!validatePassword(user.password)) {
      setAlert({
        type: "danger",
        message: "Password must have 6+ chars, one uppercase letter, and one number.",
      });
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    setAlert({ type: "success", message: "Changes saved successfully!" });
    setTimeout(() => navigate("/home"), 1500);
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
          <h4 className="text-center text-primary mb-4">Account Settings</h4>
          <form onSubmit={handleSave}>
            <div className="mb-3">
              <input
                className="form-control"
                name="name"
                placeholder="Name"
                value={user.name || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                name="email"
                placeholder="Email"
                type="email"
                value={user.email || ""}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password field with toggle */}
            <div className="mb-3 input-group">
              <input
                className="form-control"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={user.password || ""}
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
              Password must include at least 1 number, 1 uppercase letter, and 6 characters.
            </small>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
