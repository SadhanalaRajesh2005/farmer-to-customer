// import { Link } from "react-router-dom";
// import "./navbar.css";


// function Navbar({user, logout}) {


// return (

// <nav>


// <h2>
// 🌾 Farmer To Customer
// </h2>



// <Link to="/">
// Home
// </Link>



// <Link to="/products">
// Products
// </Link>



// <Link to="/register">
// Register
// </Link>



// <Link to="/cart">
// Cart
// </Link>



// <Link to="/orders">
// Orders
// </Link>




// {
// user ?

// <button onClick={logout}>
// Logout
// </button>

// :

// <Link to="/login">
// Login
// </Link>

// }



// </nav>

// )

// }


// export default Navbar;

import { Link } from "react-router-dom";
import './navbar.css'

function Navbar({ user, logout }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/add-product"> Add Product</Link> 

      {user?.role === "farmer" && <Link to="/farmer-dashboard">Farmer Dashboard</Link>}
      {user?.role === "customer" && <Link to="/customer-dashboard">Customer Dashboard</Link>}
      <Link to="/cart">Cart</Link>
      <Link to="/orders">Orders</Link>

      {user ? 
        <button onClick={logout}>Logout ({user.name})</button> : 
        <Link to="/login">Login</Link>
      }
    </nav>
  )
}
export default Navbar;