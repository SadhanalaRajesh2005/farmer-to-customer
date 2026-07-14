import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";


function ProductDetails(){

const {id}=useParams();


const [product,setProduct]=useState(null);

const [loading,setLoading]=useState(true);



useEffect(()=>{


fetch(
`https://dummyjson.com/products/${id}`
)


.then(res=>res.json())

.then(data=>{


setProduct(data);

setLoading(false);


})


},[id]);



if(loading)
{
return <h2>Loading Details...</h2>
}



return(

<div>


<h2>Product Details</h2>


<img 
src={product.thumbnail}
width="200"
/>


<h3>
Name : {product.title}
</h3>


<p>
ID : {product.id}
</p>


<p>
Description : {product.description}
</p>


<p>
Category : {product.category}
</p>


<p>
Price : ₹{product.price}
</p>


<p>
Rating : {product.rating}
</p>


<p>
Stock : {product.stock}
</p>



</div>

)


}


export default ProductDetails;