import { Link } from "react-router-dom";
import "./FarmerDashboard.css";


function FarmerDashboard() {


  return (

    <div className="farmer-dashboard">


      <h2>
        Welcome Farmer 🌾
      </h2>


      <p>
        Manage your products and orders.
      </p>





      <div className="dashboard-buttons">



        {/* Add Product */}

        <Link 
          to="/add-product" 
          className="dashboard-btn"
        >

          Add Product

        </Link>






        {/* Manage Products */}

        <Link 
          to="/products" 
          className="dashboard-btn"
        >

          Manage Products

        </Link>






        {/* View Orders */}

        <Link 
          to="/orders" 
          className="dashboard-btn"
        >

          View Orders

        </Link>



      </div>



    </div>

  );

}


export default FarmerDashboard;