import './Productcard.css'

function ProductCard({ product }) {
  if (!product) {
    return <h3>No Product Available</h3>;
  }

  return (
    <div className="card">
      {/* <img src={product.image} alt={product.name} /> */}

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <p>Price: ₹{product.price}/kg</p>

      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;