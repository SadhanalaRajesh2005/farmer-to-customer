import { useState } from "react";
import api from "../api/api";


function AddProduct() {


  const [product, setProduct] = useState({

    name: "",
    category: "",
    price: "",
    quantity: "",
    farmerName: "",
    email: "",
    image: "",

  });





  function handleChange(e) {

    setProduct({

      ...product,

      [e.target.name]: e.target.value,

    });

  }







  async function handleSubmit(e) {

    e.preventDefault();





    // Validation

    if (

      !product.name ||

      !product.category ||

      !product.price ||

      !product.quantity ||

      !product.farmerName ||

      !product.email ||

      !product.image

    ) {

      alert("Please fill all fields");

      return;

    }






    try {


      console.log("Sending Product:", product);



      const response = await api.post(

        "/products",

        product

      );




      console.log(response.data);



      alert("Product Added Successfully");





      setProduct({

        name: "",

        category: "",

        price: "",

        quantity: "",

        farmerName: "",

        email: "",

        image: "",

      });



    }


    catch(error) {


      console.log("Error:", error);


      console.log(
        "Response:",
        error.response?.data
      );



      alert(

        error.response?.data?.message ||

        "Product Add Failed"

      );


    }


  }








  return (


    <div className="add-product">


      <h2>
        Add Product 🌾
      </h2>





      <form onSubmit={handleSubmit}>



        <input

          type="text"

          name="name"

          value={product.name}

          placeholder="Product Name"

          onChange={handleChange}

        />






        <input

          type="text"

          name="category"

          value={product.category}

          placeholder="Category"

          onChange={handleChange}

        />







        <input

          type="number"

          name="price"

          value={product.price}

          placeholder="Price"

          onChange={handleChange}

        />







        <input

          type="number"

          name="quantity"

          value={product.quantity}

          placeholder="Quantity"

          onChange={handleChange}

        />







        <input

          type="text"

          name="farmerName"

          value={product.farmerName}

          placeholder="Farmer Name"

          onChange={handleChange}

        />







        <input

          type="email"

          name="email"

          value={product.email}

          placeholder="Email"

          onChange={handleChange}

        />







        <input

          type="text"

          name="image"

          value={product.image}

          placeholder="Image URL"

          onChange={handleChange}

        />







        <button type="submit">

          Add Product

        </button>





      </form>



    </div>


  );

}


export default AddProduct;