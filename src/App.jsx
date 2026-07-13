import Navbar from './components/Navbar'
import Footer from './components/Footer/footer'
// import ProductCard from './components/Productcard'

 import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import FarmerDashboard from './Pages/FarmerDashboard'
// import CustomerDashboard from './Pages/CustomerDashboard'
// import AddProduct from './Pages/AddProduct'
// import Products from './Pages/Products'
// import Cart from './Pages/Cart'
// import Orders from './Pages/Orders'

function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <hr />

        <Login />
      <hr />

      <Register />
      <hr />

      <FarmerDashboard />
      <hr />

      {/*<CustomerDashboard />
      <hr />

      <AddProduct />
      <hr />

      
      

      <Cart />
      <hr /> 

      <Orders /> */}
       {/* <Products /> */}
     {/* <ProductCard /> */}
      <Footer />
    </div>
  )
}

export default App;