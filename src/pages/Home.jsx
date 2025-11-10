import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getUser, isAuthenticated } from "../utils/auth";

//  Home Page (After Login)

// Displays welcome message and Bootstrap alert
export default function Home() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);
  const user = getUser();

  useEffect(() => {
    if (!isAuthenticated()) navigate("/login");
    const timer = setTimeout(() => setShowAlert(false), 3000); 
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        {showAlert && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            Login successful!  Welcome back, {user?.name || "User"}!
          </div>
        )}
        <div className="card shadow p-5 mx-auto" style={{ maxWidth: "500px" }}>
          <h2 className="text-primary mb-3">Welcome, {user?.name || "User"} </h2>
          <p className="text-secondary">
            You can manage your profile using the{" "}
            <strong>Account Settings</strong> option in the navbar.
          </p>
        </div>
      </div>
    </>
  );
}
