import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        ...product,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  };
  
  useEffect(() => {
    console.log("Updated cart items:", cartItems);
  }, [cartItems]);

  console.log("Cart items in App:", cartItems);

  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/catalog"
            element={<Catalog handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/product/:id"
            element={<Product handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>

    </div>
  );
}

export default App;