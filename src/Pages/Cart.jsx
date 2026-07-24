import { useEffect, useState } from "react";
import "./cart.css";
import api from "../api/api";


function Cart() {


  const [cart, setCart] = useState([]);




  useEffect(()=>{


    const savedCart = JSON.parse(
      localStorage.getItem("cart")
    ) || [];


    setCart(savedCart);


  },[]);






  function removeItem(id){


    const updatedCart = cart.filter(
      item => item._id !== id
    );


    setCart(updatedCart);


    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );


  }







  async function placeOrder(){


    try{


      const loginData =
      JSON.parse(
        localStorage.getItem("loginData")
      );



      if(!loginData){

        alert("Please login first");
        return;

      }




      const customer =
      loginData.user || loginData;




      for(const item of cart){



        const order = {



          productId:
          item._id,



          productName:
          item.name,



          image:
          item.image || "",



          price:
          item.price,



          quantity:
          1,




          farmerId:
          item.farmer?._id ||
          item.farmerId?._id,



          farmerName:
          item.farmer?.name ||
          item.farmerName,



          farmerEmail:
          item.farmer?.email ||
          item.farmerEmail,




          customerId:
          customer._id ||
          customer.id,



          customerName:
          customer.name,



          customerEmail:
          customer.email,



          status:
          "Pending",




          message:
          `New order received for ${item.name}`



        };





        console.log(
          "Sending Order:",
          order
        );





        await api.post(

          "/orders/create",

          order

        );



      }




      alert(
        "✅ Order placed successfully"
      );



      localStorage.removeItem(
        "cart"
      );



      setCart([]);




    }

    catch(error){


      console.log(
        error
      );


      alert(
        "❌ Order failed"
      );


    }



  }







  return (


    <div className="cart-container">


      <h2>
        My Cart 🛒
      </h2>





      {
        cart.length === 0 ?


        (

          <h3>
            Cart is empty
          </h3>

        )


        :


        (

          cart.map((item)=>(


            <div

              className="cart-card"

              key={item._id}

            >




              <img

                src={
                  item.image ||
                  "https://via.placeholder.com/100"
                }

                width="100"

                alt={item.name}

              />





              <h3>
                {item.name}
              </h3>





              <p>
                Price: ₹{item.price}
              </p>





              <p>

                Farmer:

                {
                  item.farmer?.name ||
                  item.farmerName ||
                  "Unknown"
                }

              </p>






              <button

                onClick={()=>
                  removeItem(item._id)
                }

              >

                Remove

              </button>




            </div>



          ))

        )

      }






      {

        cart.length > 0 &&



        <button

          className="order-btn"

          onClick={placeOrder}

        >

          Place Order 📦


        </button>


      }



    </div>


  );


}



export default Cart;