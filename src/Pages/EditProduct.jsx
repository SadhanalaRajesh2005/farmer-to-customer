import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";
import "./editproduct.css";


function EditProduct(){


    const { id } = useParams();

    const navigate = useNavigate();



    const [product,setProduct] = useState({

        name:"",
        category:"",
        price:"",
        quantity:"",
        farmerName:"",
        image:"",
        email:""

    });



    const [loading,setLoading] = useState(true);

    const [error,setError] = useState("");





    // GET SINGLE PRODUCT

    useEffect(()=>{


        async function getProduct(){


            try{


                const response = await api.get(
                    `/products/${id}`
                );


                setProduct(response.data);


            }
            catch(err){


                console.log(err);

                setError(
                    "Unable to load product"
                );


            }
            finally{

                setLoading(false);

            }


        }


        getProduct();


    },[id]);







    // INPUT CHANGE

    function handleChange(e){


        setProduct({

            ...product,

            [e.target.name]:e.target.value

        });


    }







    // UPDATE PRODUCT

    async function handleSubmit(e){


        e.preventDefault();



        try{


            await api.put(

                `/products/${id}`,

                product

            );



            alert(
                "Product Updated Successfully"
            );



            navigate("/products");



        }
        catch(err){


            console.log(err);


            alert(
                "Update Failed"
            );


        }



    }







    if(loading){

        return <h2>Loading...</h2>

    }



    if(error){

        return <h2>{error}</h2>

    }





    return(


        <div className="edit-container">


            <h2>
                ✏️ Edit Product
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

                    type="text"

                    name="image"

                    value={product.image}

                    placeholder="Image URL"

                    onChange={handleChange}

                />



                <input

                    type="email"

                    name="email"

                    value={product.email}

                    placeholder="Email"

                    onChange={handleChange}

                />




                <button type="submit">

                    Update Product

                </button>



            </form>



        </div>


    );


}


export default EditProduct;