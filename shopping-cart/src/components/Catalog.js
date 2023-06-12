import Navbar from "./Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import products from "../data/products";

function Catalog() {
  const navigate = useNavigate();
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };


  return (
    <div className="catalog">
      <Navbar logotypeColor={"logo__1"} catalogLi={"catalogLi"}  />
      <h1>
        <span>Our</span> Plants
      </h1>

      <div className="product-container">
        {products.map((product) => (
          <div
            className="product"
            key={product.id}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative" }}
          >
            <img src={product.src} alt={product.name} />
            <div className="remark">{product.remark}</div>
            <h2>{product.name}</h2>
            {hoveredProductId === product.id && (
              <button
                onClick={() => handleViewDetails(product)}
                className="btn-details"
              >
                View Details
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
