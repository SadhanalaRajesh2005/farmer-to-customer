import "./Orders.css";

function Orders() {
  return (
    <div className="orders">
      <div className="orders-box">
        <h2>My Orders</h2>

        <ol>
          <li>Order #101 - Delivered</li>
          <li>Order #102 - Processing</li>
        </ol>
      </div>
    </div>
  );
}

export default Orders;