import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate(); // ✅ navigation hook

  const goToProducts = () => {
    navigate("/products"); // ✅ navigate to Products page
  };

  return (
    <section className="home">
      <h1>Welcome Farmer To Customer</h1>
      <p>Buy fresh vegetables and fruits directly from farmers.</p>
      <button className="shop-now-btn" onClick={goToProducts}>
        Shop Now
      </button>
    </section>
  );
}

export default Home;