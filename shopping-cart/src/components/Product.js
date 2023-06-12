import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Product = ({ handleAddToCart }) => {
  const location = useLocation();
  const { product } = location.state;
  const navigate = useNavigate();

  const addToCart = (product) => {
    handleAddToCart(product);
    navigate("/cart");
  };

  return (
    <div>
      <Navbar logotypeColor={"logo__1"} />
      <div className="details-container">
        <img className="img-details" src={product.src} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <p>{product.details}</p>
          <p>₱{product.price}</p>
          <button className="btn" onClick={() => addToCart(product)}>
  Add to Cart
</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
