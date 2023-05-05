
import React from "react";
import CartItem from "../components/cartItem";
import "./Cart.css";
import Header from "../components/Header";

const Cart = () => {
  
    return (
      <div>
        <Header />
        <div className="cartscreen">
          
          <div className="cartscreen__left">
            <h2>Shopping Cart</h2>
                <CartItem/>
          </div>
  
          <div className="cartscreen__right">
            <div className="cartscreen__info">
              <p>Subtotal items</p>
              <p>$499</p>
            </div>
            <div>
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </div>
        </div>
    );
  };
  
  export default Cart;