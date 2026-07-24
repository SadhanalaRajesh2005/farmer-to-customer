import { useEffect, useState } from "react";
import "./orders.css";
import api from "../api/api";


function Orders() {


  const [orders, setOrders] = useState([]);



  useEffect(() => {

    fetchOrders();

  }, []);




  async function fetchOrders() {

    try {


      const response = await api.get("/orders");


      setOrders(response.data);



    } catch (error) {


      console.log(error);

    }

  }




  return (


    <div className="orders-container">



      <h2>
        My Orders 📦
      </h2>





      {
        orders.length === 0 ?


        (

          <h3>
            No Orders Yet
          </h3>

        )

        :

        (


          orders.map((order)=>(


            <div

              className="order-card"

              key={order._id}

            >




              <img

                src={
                  order.image ||
                  "https://via.placeholder.com/100"
                }

                width="100"

                alt={order.productName}

              />





              <h3>

                {order.productName}

              </h3>





              <p>

                Price: ₹{order.price}

              </p>





              <p>

                Farmer: {order.farmerName}

              </p>





              <p>

                Quantity: {order.quantity}

              </p>





              <p>

                Status: {order.status}

              </p>





              <p>

                Message: {order.message}

              </p>





            </div>


          ))


        )

      }



    </div>


  );


}


export default Orders;