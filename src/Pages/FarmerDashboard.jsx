import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FarmerDashboard.css";

import api from "../api/api";


function FarmerDashboard() {


  const [orders,setOrders] = useState([]);




  useEffect(()=>{


    const loginData =
      JSON.parse(
        localStorage.getItem("loginData")
      );



    if(!loginData){

      console.log("Farmer not logged in");

      return;

    }




    const farmerId =
      loginData.user?.id ||
      loginData.user?._id ||
      loginData._id ||
      loginData.id;




    if(!farmerId){

      console.log(
        "Farmer ID not found"
      );

      return;

    }





    api.get(
      `/orders/farmer/${farmerId}`
    )


    .then((res)=>{


      console.log(
        "Farmer Orders:",
        res.data
      );



      setOrders(

        res.data.orders ||
        res.data ||
        []

      );



    })


    .catch((error)=>{


      console.log(
        "Order Fetch Error:",
        error
      );


    });



  },[]);







  return (


    <div className="farmer-dashboard">



      <h2>
        Welcome Farmer 🌾
      </h2>



      <p>
        Manage your products and customer orders.
      </p>








      <div className="notifications">



        <h3>
          🔔 Customer Orders
        </h3>





        {

          orders.length === 0 ?


          (

            <p>
              No orders yet
            </p>


          )


          :


          (


            orders.map((order)=>(


              <div

                className="order-card"

                key={order._id}

              >



                <p>

                  📩

                  {
                    order.message ||
                    "New Order Received"
                  }

                </p>





                <p>

                  🥕 Product:

                  {
                    order.productName
                  }

                </p>





                <p>

                  💰 Price:

                  ₹{order.price}

                </p>





                <p>

                  📦 Quantity:

                  {
                    order.quantity
                  }

                </p>






                <p>

                  👤 Customer:

                  {
                    order.customerName
                  }

                </p>






                <p>

                  📧 Email:

                  {
                    order.customerEmail
                  }

                </p>






                <p>

                  Status:

                  {
                    order.status
                  }

                </p>





                <p>

                  Date:

                  {
                    order.createdAt
                    ?
                    new Date(
                      order.createdAt
                    )
                    .toLocaleDateString()
                    :
                    "N/A"
                  }

                </p>





              </div>


            ))


          )

        }



      </div>








      <div className="dashboard-buttons">





        <Link

          to="/add-product"

          className="dashboard-btn"

        >

          ➕ Add Product


        </Link>







        <Link

          to="/products"

          className="dashboard-btn"

        >

          🥕 Manage Products


        </Link>







        <Link

          to="/orders"

          className="dashboard-btn"

        >

          📦 View Orders


        </Link>





      </div>






    </div>


  );


}


export default FarmerDashboard;