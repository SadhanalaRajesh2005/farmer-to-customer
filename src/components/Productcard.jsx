import { Link } from "react-router-dom";
import './productcard.css'


function ProductCard({ product, deleteProduct, deleteLoading }) {


  return (

    <div className="product-card">


      <img

        src={
          product.image ||
          "https://via.placeholder.com/150"
        }

        alt={product.name}

        width="150"

      />





      <h3>
        {product.name}
      </h3>





      <p>
        Category: {product.category}
      </p>





      <p>
        Price: ₹{product.price}/kg
      </p>





      <p>
        Quantity: {product.quantity} kg
      </p>





      <p>
        Farmer: {product.farmerName}
      </p>






      <div className="product-actions">



        {/* VIEW */}

        <Link to={`/product/${product._id}`}>

          <button
            className="view-btn"
            disabled={deleteLoading}
          >

            View

          </button>

        </Link>








        {/* EDIT */}

        <Link to={`/edit-product/${product._id}`}>

          <button

            className="edit-btn"

            disabled={deleteLoading}

          >

            Edit

          </button>


        </Link>









        {/* DELETE */}

        <button


          className="delete-btn"


          disabled={deleteLoading}


          onClick={() => deleteProduct(product._id)}


        >


          {

            deleteLoading

            ?

            "Deleting..."

            :

            "Delete"

          }


        </button>





      </div>




    </div>

  );

}


export default ProductCard;