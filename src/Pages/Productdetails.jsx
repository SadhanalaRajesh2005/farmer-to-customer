import { useParams } from "react-router-dom";


function ProductDetails() {

  const { id } = useParams();


  const products = [
    {
      id: 1,
      title: "Cotton",
      category: "Cotton",
      price: 85,
      thumbnail: "https://via.placeholder.com/300?text=Cotton",
      description: "High quality cotton directly from farmer.",
      farmerName: "Rajesh Farmer",
      stock: 100,
      rating: 4.5
    },

    {
      id: 2,
      title: "Red Mirchi",
      category: "Spices",
      price: 220,
      thumbnail: "https://via.placeholder.com/300?text=Red+Mirchi",
      description: "Fresh red chilli collected from farm.",
      farmerName: "Rajesh Farmer",
      stock: 80,
      rating: 4.6
    },

    {
      id: 3,
      title: "Fresh Vegetables",
      category: "Vegetables",
      price: 40,
      thumbnail: "https://via.placeholder.com/300?text=Vegetables",
      description: "Fresh vegetables from local farmer.",
      farmerName: "Rajesh Farmer",
      stock: 150,
      rating: 4.7
    },

    {
      id: 4,
      title: "Fresh Fruits",
      category: "Fruits",
      price: 120,
      thumbnail: "https://via.placeholder.com/300?text=Fruits",
      description: "Fresh seasonal fruits.",
      farmerName: "Rajesh Farmer",
      stock: 90,
      rating: 4.8
    },

    {
      id: 5,
      title: "Rice",
      category: "Rice",
      price: 70,
      thumbnail: "https://via.placeholder.com/300?text=Rice",
      description: "Premium quality rice from farmer.",
      farmerName: "Rajesh Farmer",
      stock: 200,
      rating: 4.4
    }
  ];


  const product = products.find(
    (item) => item.id == id
  );


  if(!product){
    return <h2>Product Not Found</h2>;
  }


  return (

    <div className="product-details">

      <h2>Product Details</h2>


      <img
        src={product.thumbnail}
        alt={product.title}
        width="250"
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


      <p>
        Farmer : {product.farmerName}
      </p>


    </div>

  );

}


export default ProductDetails;