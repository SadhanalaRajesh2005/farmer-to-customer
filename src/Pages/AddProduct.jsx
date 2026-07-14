import './AddProduct.css'
function AddProduct() {
  return (
     <div className="add-product">
      <div className="add-product-box">
      <h2>Add Product</h2>

      <input type="text" placeholder="Product Name" />
      <br /><br />

      <input type="number" placeholder="Price" />
      <br /><br />

      <button>Add Product</button>
    </div>
    </div>
  );
}

export default AddProduct;