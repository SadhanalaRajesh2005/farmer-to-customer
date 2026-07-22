import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar({ user, logout }) {
  return (
    <nav className="navbar">

      <div className="logo">
        <NavLink to="/">🌾 Farmer To Customer</NavLink>
      </div>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/products">Products</NavLink>

        {/* Farmer Links */}
        {user?.role === "farmer" && (
          <>
            <NavLink to="/add-product">Add Product</NavLink>

            <NavLink to="/farmer-dashboard">
              Farmer Dashboard
            </NavLink>
          </>
        )}

        {/* Customer Links */}
        {user?.role === "customer" && (
          <>
            <NavLink to="/customer-dashboard">
              Customer Dashboard
            </NavLink>

            <NavLink to="/cart">Cart</NavLink>

            <NavLink to="/orders">Orders</NavLink>
          </>
        )}

      </div>

      <div className="user-section">

        {user ? (
          <>
            <span className="welcome">
              Welcome, {user.name}
            </span>

            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>

            <NavLink to="/register">Register</NavLink>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;