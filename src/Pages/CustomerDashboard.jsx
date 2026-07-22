import { Link } from "react-router-dom";
import "./CustomerDashboard.css";


function CustomerDashboard() {


  return (

    <div className="customer-dashboard">


      <h2>
        Welcome Customer 🛒
      </h2>


      <p>
        Explore fresh products from farmers.
      </p>





      <div className="dashboard-buttons">



        {/* Browse Products */}

        <Link

          to="/products"

          className="dashboard-btn"

        >

          Browse Products

        </Link>






        {/* Cart */}

        <Link

          to="/cart"

          className="dashboard-btn"

        >

          View Cart

        </Link>






        {/* Orders */}

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


export default CustomerDashboard;