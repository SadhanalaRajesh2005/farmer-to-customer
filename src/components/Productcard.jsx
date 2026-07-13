// import "./ProductCard.css";


function ProductCard({product}){


return(

<div className="card">


<img src={product.image}/>

<h3>{product.name}</h3>

<p>
Category : {product.category}
</p>


<p>
Price : ₹{product.price}/kg
</p>


<button>
Buy Now
</button>


</div>


)

}


export default ProductCard;