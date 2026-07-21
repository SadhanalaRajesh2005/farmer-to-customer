import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";


function ProductDetails(){

    const { id } = useParams();

    const [product,setProduct] = useState(null);



    useEffect(()=>{


        async function fetchProduct(){

            try{

                const response = await api.get(`/products/${id}`);

                setProduct(response.data);

            }
            catch(error){

                console.log(error);

            }

        }


        fetchProduct();


    },[id]);



    if(!product){

        return <h2>Product Not Found</h2>;

    }



    return(

        <div>


            <h2>{product.name}</h2>


            <p>
                Category: {product.category}
            </p>


            <p>
                Price: ₹{product.price}
            </p>


            <p>
                Farmer: {product.farmerName}
            </p>


            <p>
                Quantity: {product.quantity} kg
            </p>


        </div>

    );

}


export default ProductDetails;