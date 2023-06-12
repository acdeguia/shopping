import React from "react";
import Navbar from "./Navbar";

import trash from "../assets/trash.svg";
import { calculateTotalItems } from '../utils/cartUtils';


const Cart = ({ cartItems, setCartItems }) => {

  const totalItems = calculateTotalItems(cartItems);

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateSubTotalPrice = () => {
    const subTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return subTotalPrice.toFixed(2);
  };


  return (
    <div className="cart">
      <Navbar logotypeColor="logo__1" cartItems={cartItems} />
      <h1>
        <span>My</span> Bag
      </h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="mycart-summary">
          <div className="cart-grp-list">
            {cartItems.map((item) => (
              <div className="cart-list" key={item.id}>
                <img className="cart-img" src={item.src} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <div className="qty">
                    <p>Qty:</p>

                    <p>{item.quantity}</p>
                    <div className="add-minus_btn">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p>Price: {item.price * item.quantity}</p>
                  <img
                    className="trash-btn"
                    onClick={() => handleRemoveFromCart(item.id)}
                    src={trash}
                    alt="remove item"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="summary">
            <h3>Summary</h3>
            <p className="item">
              {totalItems} item{totalItems > 1 ? "s" : ""}
            </p>
            <p>Subtotal: ₱{calculateSubTotalPrice()}</p>
            <p>Shipping: ₱150.00</p>
            <hr />
            <p>
              Total: ₱{(parseFloat(calculateSubTotalPrice()) + 150).toFixed(2)}
            </p>
          
     
            <button className="btn checkout-btn">Checkout</button>
      
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
