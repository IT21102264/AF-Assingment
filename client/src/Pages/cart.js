// Import necessary modules and components
import React, { useState } from "react";
import cartItem from "../components/cartItem";
import { useNavigate } from "react-router-dom";
import "../cart.css";


// Define a functional component named Cart
export default function cart() {
  const navigate = useNavigate();



  // Use reduce to calculate the total checkout price of all items in the cart
  const checkoutPrice = info.reduce(
    (acc, item) => acc + item.itemPrice * item.itemQuantity,
    0
  );


  const clearCart = () => {
    cartDispatch({ type: "ClearCart" });
    clearCartContext();
  };

  const tabSpaces = '\u00A0'.repeat(35);

  // Render the Cart component
  return (
    <div>
      <Header />
      <center>
        <h2>Shopping Cart</h2>
      </center>
      <div className="cart">
        <div className="cart__left">
            <cartItem />
          <hr />
          <div>
            {/* Render a button to clear cart */}
            {cart.length > 0 && (
              <button onClick={(e) => clearCart()} className="btnClear">
                Clear Cart
              </button>
            )}
          </div>
        </div>
        <div className="cart__right">
          <div className="cart__info">
            <p><center>Order Summary</center></p>
            <p> Net Salary{tabSpaces} Rs:{checkoutPrice}</p>
          </div>

          <div>
            {/* Render a button to proceed to checkout */}
            <button onClick={proceedToCheckout}>Proceed To Checkout</button>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}
