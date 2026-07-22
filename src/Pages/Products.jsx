import { useEffect, useState } from "react";
import "./Product.css";
import api from "../api/api";
import ProductCard from "../components/ProductCard";


function Products() {


  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const [error, setError] = useState("");






  // GET ALL PRODUCTS

  async function fetchProducts() {


    try {


      setLoading(true);


      const response = await api.get("/products");


      setProducts(response.data);


    }


    catch(err) {


      console.log(err);


      setError("Server Error. Unable to fetch products");


    }


    finally {


      setLoading(false);


    }


  }








  // DELETE PRODUCT

  async function deleteProduct(id) {


    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );



    if(!confirmDelete)
      return;





    try {


      setDeleteLoading(true);



      await api.delete(`/products/${id}`);



      alert("Product Deleted Successfully");



      fetchProducts();



    }


    catch(err) {


      console.log(err);


      alert("Delete Failed");


    }


    finally {


      setDeleteLoading(false);


    }


  }








  useEffect(()=>{


    fetchProducts();


  },[]);









  // SEARCH FILTER

  const filteredProducts = products.filter((product)=>

    product.name
    .toLowerCase()
    .includes(search.toLowerCase())

  );







  if(loading){


    return <h2>Loading Products...</h2>


  }






  if(error){


    return <h2>{error}</h2>


  }







  return (


    <div className="products">



      <h2>
        🌾 Farmer To Customer Products
      </h2>






      <input

        type="text"

        placeholder="Search Product..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

      />







      {

        filteredProducts.length === 0 ?


        (

          <h3>
            No Products Available
          </h3>

        )


        :


        (


          <div className="product-list">


            {


              filteredProducts.map((product)=>(


                <ProductCard


                  key={product._id}


                  product={product}


                  deleteProduct={deleteProduct}


                  deleteLoading={deleteLoading}


                />


              ))


            }


          </div>


        )


      }





    </div>


  );

}


export default Products;