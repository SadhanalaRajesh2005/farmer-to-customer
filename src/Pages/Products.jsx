import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

import api from "../api/api";
import Productcard from "../components/Productcard";


function Products() {


  const navigate = useNavigate();


  const [products, setProducts] = useState([]);


  const [search, setSearch] = useState("");


  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(6);

  const [totalPages, setTotalPages] = useState(1);

  const [totalProducts, setTotalProducts] = useState(0);



  const [sort, setSort] = useState("createdAt");

  const [order, setOrder] = useState("desc");



  const [loading, setLoading] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);


  const [error, setError] = useState("");





  // GET PRODUCTS

  async function fetchProducts(){


    try{


      setLoading(true);

      setError("");



      const response =
        await api.get("/products",{


          params:{


            search,

            page,

            limit,

            sort,

            order


          }


        });



      setProducts(
        response.data.products
      );


      setTotalPages(
        response.data.totalPages
      );


      setTotalProducts(
        response.data.totalProducts
      );



    }
    catch(err){


      console.log(err);


      setError(
        "Server Error. Unable to fetch products"
      );


    }
    finally{


      setLoading(false);


    }


  }








  // DELETE PRODUCT


  async function deleteProduct(id){


    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this product?"
      );



    if(!confirmDelete)
      return;



    try{


      setDeleteLoading(true);



      await api.delete(
        `/products/${id}`
      );



      alert(
        "Product Deleted Successfully"
      );



      fetchProducts();



    }
    catch(err){


      console.log(err);


      alert(
        "Delete Failed"
      );


    }
    finally{


      setDeleteLoading(false);


    }


  }







  // EDIT PRODUCT

  function editProduct(product){


    navigate(
      `/edit-product/${product._id}`
    );


  }







  useEffect(()=>{


    fetchProducts();


  },[
    search,
    page,
    limit,
    sort,
    order
  ]);









  function resetFilters(){


    setSearch("");

    setPage(1);

    setLimit(6);

    setSort("createdAt");

    setOrder("desc");


  }








  if(loading){

    return (

      <h2>
        Loading Products...
      </h2>

    );

  }







  if(error){

    return (

      <h2>
        {error}
      </h2>

    );

  }









  return (


    <div className="products">


      <h2>
        🌾 Farmer To Customer Products
      </h2>





      {/* Search */}

      <input

        type="text"

        placeholder="Search Product..."

        value={search}

        onChange={(e)=>{

          setSearch(e.target.value);

          setPage(1);

        }}

      />






      {/* Sort */}

      <select

        value={sort}

        onChange={(e)=>
          setSort(e.target.value)
        }

      >

        <option value="createdAt">
          Latest
        </option>


        <option value="name">
          Name
        </option>


        <option value="price">
          Price
        </option>


      </select>








      {/* Order */}

      <select

        value={order}

        onChange={(e)=>
          setOrder(e.target.value)
        }

      >

        <option value="asc">
          Ascending
        </option>


        <option value="desc">
          Descending
        </option>


      </select>








      {/* Limit */}

      <select

        value={limit}

        onChange={(e)=>{


          setLimit(
            Number(e.target.value)
          );


          setPage(1);


        }}

      >

        <option value="5">
          5
        </option>


        <option value="10">
          10
        </option>


        <option value="20">
          20
        </option>


      </select>







      <button onClick={resetFilters}>

        Reset

      </button>








      <p>

        Showing {products.length}
        {" "}products out of{" "}
        {totalProducts}

      </p>









      {
        products.length === 0 ?


        (

          <h3>
            No Products Found
          </h3>

        )


        :


        (

          <div className="product-list">


          {

            products.map((product)=>(


              <Productcard


                key={product._id}


                product={product}


                deleteProduct={deleteProduct}


                deleteLoading={deleteLoading}


                editProduct={editProduct}


              />


            ))

          }


          </div>

        )

      }









      {/* Pagination */}


      <div className="pagination">


        <button

          disabled={page===1}

          onClick={()=>
            setPage(page-1)
          }

        >

          Previous

        </button>





        <span>

          Page {page} of {totalPages}

        </span>





        <button

          disabled={page===totalPages}

          onClick={()=>
            setPage(page+1)
          }

        >

          Next

        </button>



      </div>





    </div>


  );


}


export default Products;