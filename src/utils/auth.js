//  Authentication Utilities

// Check if user is logged in
export const isAuthenticated = () => localStorage.getItem("loggedIn") === "true";

// Logout function - clears session and redirects to login page
export const logout = () => {
  localStorage.removeItem("loggedIn");
  window.location.href = "/login";
};

// Get current user details from localStorage
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
