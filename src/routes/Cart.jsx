import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import { useGlobalContext } from "../context/Context";
import "./cart.css";

const Cart = () => {
  const { cart, total } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div className="">
      <Navbar />
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
          {cart === 0 ? <h1>Your cart is empty</h1> : null}
          <div>
            <div className="checkout">
              <p> Subtotal: ${total}</p>
              <button onClick={() => navigate("/")}> Continue Shopping </button>

              <button onClick={() => navigate("/")}> Clear Cart </button>
              <button
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                {" "}
                Checkout{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
