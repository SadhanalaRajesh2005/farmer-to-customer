import { Link } from "react-router-dom";
import api from "../api/api";
import "./productcard.css";


function ProductCard({
  product,
  deleteProduct,
  deleteLoading,
  editProduct
}) {



async function buyProduct(){


try{


const loginData =
JSON.parse(
localStorage.getItem("loginData")
);




if(!loginData){


alert("Please login first");

return;

}





if(loginData.role !== "customer"){


alert(
"Only customers can buy products"
);


return;


}






if(!product._id){


alert(
"Product id not found"
);


return;


}






const orderData = {


productId:product._id,


customerId:loginData._id,


customerName:loginData.name,


customerEmail:loginData.email,


quantity:1



};







console.log(
"ORDER DATA:",
orderData
);






const response = await api.post(

"/orders/create",

orderData

);






console.log(
response.data
);




alert(
"Order placed successfully"
);



}



catch(error){


console.log(

error.response?.data ||

error.message

);



alert(

error.response?.data?.message ||

"Order failed"

);


}



}









return (


<div className="product-card">






<img

src={product.image}

alt={product.name}

/>





<h3>

{product.name}

</h3>





<p>

Category: {product.category}

</p>





<p>

Price: ₹{product.price}

</p>





<p>

Quantity: {product.quantity}

</p>






<p>

Farmer:

{

product.farmerId?.name ||

product.farmerName ||

"Not Available"

}


</p>






<p>

Email:

{

product.farmerId?.email ||

"Not Available"

}


</p>








<button

onClick={buyProduct}

>

Buy Now

</button>








{


editProduct &&

(


<button


className="edit-btn"


onClick={()=>editProduct(product)}


>


Edit ✏️


</button>


)


}








{


deleteProduct &&

(


<button


className="delete-btn"


disabled={deleteLoading}


onClick={()=>deleteProduct(product._id)}


>


{

deleteLoading

?

"Deleting..."

:

"Delete"

}


</button>


)


}








<br/>






<Link

to={`/product/${product._id}`}

>


View Details


</Link>





</div>


);


}



export default ProductCard;