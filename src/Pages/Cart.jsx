import './Cart.css'

function Cart() {
  return (
    <div className="cart">
      <div className="cart-box">
        <h2>Shopping Cart</h2>

        <div className="cart-item">
          <span>Tomato</span>
          <span>₹40</span>
        </div>

        <div className="cart-item">
          <span>Potato</span>
          <span>₹30</span>
        </div>

        <h3 className="cart-total">Total: ₹70</h3>

        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;