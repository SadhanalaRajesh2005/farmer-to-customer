import { useState } from "react";
import "./AddProduct.css";

function AddProduct() {

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [farmerName, setFarmerName] = useState("");



  const addProduct = (e) => {

    e.preventDefault();


    const newProduct = {
      id: Date.now(),
      name: productName,
      category: category,
      price: price,
      image: "https://via.placeholder.com/250x180?text=" + productName,
      farmerName: farmerName
    };



    const oldProducts =
      JSON.parse(localStorage.getItem("products")) || [];



    oldProducts.push(newProduct);



    localStorage.setItem(
      "products",
      JSON.stringify(oldProducts)
    );



    alert("Product Added Successfully!");



    setProductName("");
    setCategory("");
    setPrice("");
    setFarmerName("");

  };



  return (

    <div className="add-product">

      <div className="add-product-box">

        <h2>Add Product 🌾</h2>


        <form onSubmit={addProduct}>


          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e)=>setProductName(e.target.value)}
          />

          <br/><br/>


          <input
            type="text"
            placeholder="Category (Vegetables/Fruits/Cotton/Mirchi)"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          />


          <br/><br/>


          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />


          <br/><br/>


          <input
            type="text"
            placeholder="Farmer Name"
            value={farmerName}
            onChange={(e)=>setFarmerName(e.target.value)}
          />


          <br/><br/>


          <button type="submit">
            Add Product
          </button>


        </form>


      </div>

    </div>

  );

}


export default AddProduct;