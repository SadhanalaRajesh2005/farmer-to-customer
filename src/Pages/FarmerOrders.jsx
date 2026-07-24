import {useEffect,useState} from "react";
import api from "../api/api";


function FarmerOrders(){


const [orders,setOrders]=useState([]);



useEffect(()=>{


const farmer =
JSON.parse(
localStorage.getItem("loginData")
);



api.get(
`/orders/farmer/${farmer._id}`
)
.then(res=>{

setOrders(res.data);

});


},[]);




return(

<div>


<h2>
Farmer Orders
</h2>



{
orders.map(order=>(


<div key={order._id}>


<h3>
{order.productName}
</h3>


<p>
Customer:
{order.customerName}
</p>


<p>
Quantity:
{order.quantity}
</p>


<p>
Message:
{order.message}
</p>



<button>
Accept
</button>


<button>
Reject
</button>



</div>


))

}


</div>

);


}


export default FarmerOrders;