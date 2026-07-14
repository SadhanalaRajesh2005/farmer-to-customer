import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from './components/Navbar'
import Footer from './components/Footer/footer'
import './App.css'


import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import FarmerDashboard from './Pages/FarmerDashboard'
import CustomerDashboard from './Pages/CustomerDashboard'
import AddProduct from './Pages/AddProduct'

import Cart from './Pages/Cart'
import Orders from './Pages/Orders'

import Products from "./Pages/Products";
import Productdetails from "./Pages/Productdetails";
import Notfound from "./Pages/Notfound";



function App(){


const location = useLocation();

const navigate = useNavigate();


// Login Persistence

const [user,setUser] = useState(

JSON.parse(localStorage.getItem("loginData")) || null

);



// Theme Persistence

const [theme,setTheme] = useState(

localStorage.getItem("theme") || "light"

);




// Apply Theme

useEffect(()=>{


localStorage.setItem(
"theme",
theme
);


document.body.className = theme;


},[theme]);





// Session Storage

useEffect(()=>{


sessionStorage.setItem(
"lastVisitedPage",
location.pathname
);


},[location]);





// Logout Function

const logout = ()=>{


localStorage.removeItem("loginData");


setUser(null);


navigate("/login");


}





return(


<div className={theme}>


<Navbar 
user={user}
logout={logout}
/>



<div className="theme-container">

<button

onClick={()=>setTheme(

theme==="light" ? "dark":"light"

)}

>

{
theme==="light"

?

"🌙 Dark Mode"

:

"☀️ Light Mode"

}

</button>


</div>





<Routes>


<Route path="/" element={<Home/>}/>



<Route path="/products" element={<Products/>}/>




<Route

path="/product/:id"

element={<Productdetails/>}

/>



<Route

path="/login"

element={
<Login setUser={setUser}/>}

/>




<Route path="/register" element={<Register/>}/>



<Route

path="/farmer-dashboard"

element={<FarmerDashboard/>}

/>




<Route

path="/customer-dashboard"

element={<CustomerDashboard/>}

/>




<Route

path="/add-product"

element={<AddProduct/>}

/>



<Route path="/cart" element={<Cart/>}/>



<Route path="/orders" element={<Orders/>}/>




<Route path="*" element={<Notfound/>}/>



</Routes>




<Footer/>



</div>


)

}


export default App;