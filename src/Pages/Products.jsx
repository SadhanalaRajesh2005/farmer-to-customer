import { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Products() {

  const [products] = useState([

    {
      id: 1,
      name: "Cotton",
      category: "Agriculture",
      price: 80,
      image: "https:images.unsplash.com/photo-1633873972250-e69cd8b5e31c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y290dG9ufGVufDB8fDB8fHww",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 2,
      name: "Red Mirchi",
      category: "Spices",
      price: 220,
      image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 3,
      name: "Tomato",
      category: "Vegetables",
      price: 30,
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 4,
      name: "Potato",
      category: "Vegetables",
      price: 35,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 5,
      name: "Onion",
      category: "Vegetables",
      price: 40,
      image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 6,
      name: "Brinjal",
      category: "Vegetables",
      price: 45,
      image: "https://images.unsplash.com/photo-1603048719539-9ecb6fdf2d77?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 7,
      name: "Carrot",
      category: "Vegetables",
      price: 50,
      image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 8,
      name: "Mango",
      category: "Fruits",
      price: 120,
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 9,
      name: "Apple",
      category: "Fruits",
      price: 180,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 10,
      name: "Banana",
      category: "Fruits",
      price: 60,
      image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 11,
      name: "Rice",
      category: "Grains",
      price: 70,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31b?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 12,
      name: "Wheat",
      category: "Grains",
      price: 45,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 13,
      name: "Groundnut",
      category: "Pulses",
      price: 100,
      image: "https://images.unsplash.com/photo-1567892737950-30e6b6a3e6e7?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 14,
      name: "Sugarcane",
      category: "Crops",
      price: 50,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
      farmerName: "Rajesh Farmer",
    },

    {
      id: 15,
      name: "Maize",
      category: "Grains",
      price: 60,
      image: "https://images.unsplash.com/photo-1601593768790-5d5b8c9e7c8e?w=400",
      farmerName: "Rajesh Farmer",
    },

  ]);


  return (

    <div className="products">

      <h2>🌾 Farmer To Customer Products</h2>


      <div className="product-list">


        {
          products.map((product)=>(


            <div className="product-card" key={product.id}>


              <img
                src={product.image}
                alt={product.name}
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
                <b>Farmer:</b> {product.farmerName}
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


    </div>

  );

}


export default Products;