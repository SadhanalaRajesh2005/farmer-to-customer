import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";


function ProductDetails() {


    const { id } = useParams();


    const [product, setProduct] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");





    // Fetch Single Product

    async function fetchProduct(){


        try{


            setLoading(true);


            const res = await api.get(`/products/${id}`);


            setProduct(res.data);


        }


        catch(err){


            console.log(err);


            setError("Unable to fetch product details");


        }


        finally{


            setLoading(false);


        }


    }






    useEffect(()=>{


        fetchProduct();


    },[id]);








    if(loading){


        return <h2>Loading Product...</h2>


    }






    if(error){


        return <h2>{error}</h2>


    }







    return(


        <div className="product-details">



            <img

                src={product.image}

                alt={product.name}

                width="300"

            />





            <h1>

                {product.name}

            </h1>






            <h3>

                Category: {product.category}

            </h3>






            <h3>

                Price: ₹{product.price}/kg

            </h3>







            <h3>

                Quantity: {product.quantity} kg

            </h3>







            <h3>

                Farmer: {product.farmerName}

            </h3>







            <h3>

                Email: {product.email}

            </h3>





        </div>


    );


}


export default ProductDetails;