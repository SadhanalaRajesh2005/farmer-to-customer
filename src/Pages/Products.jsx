import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import api from "../api/api";

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  // Get Products From Backend
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await api.get("/products");

      console.log(response.data);

      setProducts(response.data);

    } catch (error) {
      console.log("Products Error:", error);
    } finally {
      setLoading(false);
    }
  };


  // Add To Cart
  async function addToCart(id) {

    const cartData = {
      productId: id,
      quantity: 1
    };

    try {

      const response = await api.post("/cart", cartData);

      console.log(response.data);

      alert("Product Added To Cart");

    } catch(error) {

      console.log("Cart Error:", error);

    }

  }



  useEffect(() => {

    fetchProducts();

  }, []);



  if(loading){

    return <h2>Loading Products...</h2>;

  }



  return (

    <div className="products">

      <h2>
        🌾 Farmer To Customer Products
      </h2>


      {
        products.length === 0 ? (

          <h3>No Products Available</h3>

        ) : (


          <div className="product-list">


          {
            products.map((product)=>(


              <div 
                className="product-card"
                key={product._id}
              >


                <img
                  src={product.image}
                  alt={product.name}
                  width="150"
                />


                <h3>
                  {product.name}
                </h3>


                <p>
                  <b>Category:</b> {product.category}
                </p>


                <p>
                  <b>Price:</b> ₹{product.price}/kg
                </p>


                <p>
                  <b>Quantity:</b> {product.quantity} kg
                </p>


                <p>
                  <b>Farmer:</b> {product.farmerName}
                </p>
                <p>
                  <b>Email:{product.email}</b>
                  </p>


                <button
                  onClick={()=>addToCart(product._id)}
                >
                  Add To Cart
                </button>



                <Link to={`/product/${product._id}`}>
                  <button>
                    View Product
                  </button>
                </Link>


              </div>


            ))
          }


          </div>

        )
      }


    </div>

  );

}


export default Products;