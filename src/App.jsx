import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer/footer";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";


import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import FarmerDashboard from "./Pages/FarmerDashboard";
import CustomerDashboard from "./Pages/CustomerDashboard";

import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";

import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";

import Products from "./Pages/Products";
import Productdetails from "./Pages/Productdetails";

import FarmerOrders from "./Pages/FarmerOrders";

import Forgotpassword from "./Pages/Forgotpassword";

import Notfound from "./Pages/Notfound";





function App() {


  const location = useLocation();

  const navigate = useNavigate();



  const [user,setUser] = useState(null);





  // ===============================
  // RESTORE SESSION
  // ===============================

  useEffect(()=>{


    const savedUser =
    localStorage.getItem("loginData");


    const token =
    localStorage.getItem("token");



    if(savedUser && token){


      setUser(

        JSON.parse(savedUser)

      );


    }


  },[]);







  // ===============================
  // THEME
  // ===============================


  const [theme,setTheme] = useState(

    localStorage.getItem("theme") || "light"

  );



  useEffect(()=>{


    localStorage.setItem(

      "theme",

      theme

    );


    document.body.className = theme;



  },[theme]);








  // ===============================
  // LAST PAGE
  // ===============================

  useEffect(()=>{


    sessionStorage.setItem(

      "lastVisitedPage",

      location.pathname

    );


  },[location]);








  // ===============================
  // LOGOUT
  // ===============================

  const logout = ()=>{


    setUser(null);


    localStorage.removeItem(
      "loginData"
    );


    localStorage.removeItem(
      "token"
    );


    navigate("/login");


  };









return (

<div className={theme}>


<Navbar

user={user}

logout={logout}

/>




<div className="theme-container">


<button

onClick={()=>


setTheme(

theme==="light"

?

"dark"

:

"light"

)


}

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





<Route

path="/"

element={<Home/>}

/>





<Route

path="/products"

element={<Products/>}

/>





<Route

path="/product/:id"

element={<Productdetails/>}

/>







{/* AUTH */}



<Route

path="/login"

element={

<Login

setUser={setUser}

/>

}

/>





<Route

path="/register"

element={<Register/>}

/>





<Route

path="/forgot-password"

element={<Forgotpassword/>}

/>










{/* FARMER ROUTES */}



<Route

path="/farmer-dashboard"

element={


<ProtectedRoute

user={user}

role="farmer"

>


<FarmerDashboard/>


</ProtectedRoute>


}

/>






<Route

path="/add-product"

element={


<ProtectedRoute

user={user}

role="farmer"

>


<AddProduct/>


</ProtectedRoute>


}

/>







<Route

path="/edit-product/:id"

element={


<ProtectedRoute

user={user}

role="farmer"

>


<EditProduct/>


</ProtectedRoute>


}

/>







<Route

path="/farmer-orders"

element={


<ProtectedRoute

user={user}

role="farmer"

>


<FarmerOrders/>


</ProtectedRoute>


}

/>









{/* CUSTOMER ROUTES */}




<Route

path="/customer-dashboard"

element={


<ProtectedRoute

user={user}

role="customer"

>


<CustomerDashboard/>


</ProtectedRoute>


}

/>







<Route

path="/cart"

element={


<ProtectedRoute

user={user}

role="customer"

>


<Cart/>


</ProtectedRoute>


}

/>







<Route

path="/orders"

element={


<ProtectedRoute

user={user}

role="customer"

>


<Orders/>


</ProtectedRoute>


}

/>









<Route

path="*"

element={<Notfound/>}

/>






</Routes>







<Footer/>



</div>


);


}


export default App;