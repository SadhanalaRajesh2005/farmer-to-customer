import ProductCard from '../components/Productcard'
// import "./Products.css";


function Products(){


const products=[

{
name:"Tomato",
category:"Vegetable",
price:40,
image:"https://cdn.pixabay.com/photo/1561136598-7f68413baa99.jpg"
},

{
name:"Apple",
category:"Fruit",
price:120,
image:"https://cdn.pixabay.com/photo/1560806887-1e4cd0b6cbd6.jpg"
},

{
name:"Carrot",
category:"Vegetable",
price:50,
image:"https://cdn.pixabay.com/photo/1447175009-9a9a6f8f7e7.jpg"
}

];


return(

<section>


<h1>Farm Products</h1>


<div className="products">


{
products.map((item,index)=>(

<ProductCard
key={index}
product={item}
/>

))

}


</div>


</section>

)

}


export default Products;