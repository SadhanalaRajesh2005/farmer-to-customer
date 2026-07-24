import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CustomerDashboard.css";

import api from "../api/api";


function CustomerDashboard() {


  const [orders,setOrders] = useState([]);




  useEffect(()=>{


    const loginData =
      JSON.parse(
        localStorage.getItem("loginData")
      );



    if(!loginData){

      return;

    }



    const customerId =
      loginData.user?.id ||
      loginData.user?._id ||
      loginData._id ||
      loginData.id;




    if(!customerId){

      console.log(
        "Customer ID not found"
      );

      return;

    }




    api.get(
      `/orders/customer/${customerId}`
    )


    .then((res)=>{


      console.log(
        "Customer Orders:",
        res.data
      );



      setOrders(
        res.data.orders ||
        res.data
      );



    })


    .catch((error)=>{


      console.log(error);


    });



  },[]);







  return (


    <div className="customer-dashboard">



      <h2>
        Welcome Customer 🛒
      </h2>



      <p>
        Explore fresh products from farmers.
      </p>






      <div className="dashboard-buttons">





        <Link

          to="/products"

          className="dashboard-btn"

        >

          🛍️ Buy Products

        </Link>






        <Link

          to="/cart"

          className="dashboard-btn"

        >

          🛒 View Cart

        </Link>







        <Link

          to="/orders"

          className="dashboard-btn"

        >

          📦 View Orders

        </Link>



      </div>








      <div className="customer-orders">


        <h3>
          My Orders 📦
        </h3>





        {

          orders.length === 0 ?


          (

            <p>
              No orders placed yet
            </p>


          )


          :


          (

            orders.map((order)=>(


              <div

                className="order-card"

                key={order._id}

              >



                <h4>

                  {order.productName}

                </h4>





                <p>

                  Price:
                  ₹{order.price}

                </p>





                <p>

                  Farmer:
                  {order.farmerName}

                </p>





                <p>

                  Status:
                  {order.status}

                </p>





                <p>

                  Message:
                  {order.message}

                </p>



              </div>


            ))


          )


        }



      </div>






    </div>


  );


}


export default CustomerDashboard;