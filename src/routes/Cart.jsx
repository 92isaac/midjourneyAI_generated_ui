import React from "react";
import { useNavigate } from "react-router-dom";
import CartProps from "../component/cart/CartProps";
import Navbar from "../component/navbar/Navbar";
import { useGlobalContext } from "../context/Context";
import "./cart.css";

const Cart = () => {
  const { cart, total, clearCart } = useGlobalContext();
  const navigate = useNavigate();
  console.log(cart)
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
          {cart.length === 0 ? <h1>Your cart is empty</h1> : null}
          <div>
            {cart.map((item)=>(<CartProps key={item.desc} 
            {...item}
            />))}
            <div className="checkout">
              <p> Subtotal: ${total}</p>
              <button onClick={() => navigate("/")}> Continue Shopping </button>

              <button onClick={clearCart}> Clear Cart </button>
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
