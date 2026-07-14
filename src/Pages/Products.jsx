import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Product.css'

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {


    // Farmer Added Products
    const farmerProducts =
      JSON.parse(localStorage.getItem("products")) || [];



    fetch("https://dummyjson.com/products")

      .then(res => res.json())

      .then(data => {


        const apiProducts = data.products.map(product => ({

          id: product.id,

          name: product.title,

          category: product.category,

          price: product.price,

          image: product.thumbnail,

          farmerName: "API Farmer"


        }));


        setProducts([
          ...farmerProducts,
          ...apiProducts
        ]);


        setLoading(false);


      })

      .catch(() => {

        setError("Failed to load products");
        setLoading(false);

      });


  }, []);



  if(loading){

    return <h2>Loading Products...</h2>

  }



  if(error){

    return <h2>{error}</h2>

  }



  return (

    <div className="products">


      <h2>🌾 Farmer To Customer Products</h2>



      {
        products.map(product => (


          <div className="product-card" key={product.id}>


            <img

              src={product.image}

              alt={product.name}

              width="200"

              height="150"

            />



            <h3>
              {product.name}
            </h3>



            <p>
              Category : {product.category}
            </p>



            <p>
              Price : ₹{product.price}/kg
            </p>



            <p>
              Farmer : {product.farmerName}
            </p>



            <Link to={`/product/${product.id}`}>

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


export default Products;