import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar({user, logout}) {


return (

<nav>


<h2>
🌾 Farmer To Customer
</h2>



<Link to="/">
Home
</Link>



<Link to="/products">
Products
</Link>



<Link to="/register">
Register
</Link>



<Link to="/cart">
Cart
</Link>



<Link to="/orders">
Orders
</Link>




{
user ?

<button onClick={logout}>
Logout
</button>

:

<Link to="/login">
Login
</Link>

}



</nav>

)

}


export default Navbar;