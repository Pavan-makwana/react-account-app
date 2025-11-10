import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

//  Login Page

// Validates credentials with password visibility toggle
export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [alert, setAlert] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Handle form change
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    // Validate email and password fields before login
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));

        if (!form.email || !form.password) {
            setAlert({ type: "danger", message: "Please fill all fields!" });
            return;
        }

        if (user && user.email === form.email && user.password === form.password) {
            localStorage.setItem("loggedIn", true);
            setAlert({ type: "success", message: "Login successful! Redirecting..." });
            setTimeout(() => navigate("/home"), 1500);
        } else {
            setAlert({ type: "danger", message: "Invalid credentials!" });
        }
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
                    <h3 className="text-center mb-4 text-success">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Password field with toggle */}
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

                        <button className="btn btn-success w-100">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}
