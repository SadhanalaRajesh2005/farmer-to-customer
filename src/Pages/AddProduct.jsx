import { useState } from "react";
import api from "../api/api";
import "./AddProduct.css";


function AddProduct() {


  const loginData =
    JSON.parse(
      localStorage.getItem("loginData")
    );


  const farmer = loginData;



  const [product,setProduct] = useState({

    name:"",

    category:"",

    price:"",

    quantity:"",

    farmerName: farmer?.name || "",

    image:"",

    description:""

  });






  function handleChange(e){


    setProduct({

      ...product,

      [e.target.name]:e.target.value

    });


  }







  async function handleSubmit(e){


    e.preventDefault();



    if(

      !product.name ||

      !product.category ||

      !product.price ||

      !product.quantity ||

      !product.image

    ){


      alert("Please fill all fields");

      return;


    }





    try{


      console.log(
        "Sending Product:",
        product
      );



      const response = await api.post(

        "/products",

        product

      );



      console.log(
        response.data
      );



      alert(
        "Product Added Successfully"
      );





      setProduct({


        name:"",


        category:"",


        price:"",


        quantity:"",


        farmerName: farmer?.name || "",


        image:"",


        description:""


      });



    }


    catch(error){



      console.log(error);



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

          placeholder="Product Name"

          value={product.name}

          onChange={handleChange}

        />





        <select

          name="category"

          value={product.category}

          onChange={handleChange}

        >


          <option value="">
            Select Category
          </option>


          <option value="Vegetables">
            Vegetables
          </option>


          <option value="Fruits">
            Fruits
          </option>


          <option value="Cotton">
            Cotton
          </option>


          <option value="Mirchi">
            Mirchi
          </option>


        </select>







        <input

          type="number"

          name="price"

          placeholder="Price"

          value={product.price}

          onChange={handleChange}

        />







        <input

          type="number"

          name="quantity"

          placeholder="Quantity"

          value={product.quantity}

          onChange={handleChange}

        />







        <input

          type="text"

          name="farmerName"

          value={product.farmerName}

          readOnly

        />







        <input

          type="text"

          name="image"

          placeholder="Image URL"

          value={product.image}

          onChange={handleChange}

        />







        <textarea

          name="description"

          placeholder="Description"

          value={product.description}

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