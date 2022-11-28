import React, { useContext, useEffect } from "react";
import "../../App.css";
import { CartContext } from "../../CartContext";

function PlaceOrder() {
  const [cart, setCart] = useContext(CartContext);
  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <div className="placeOrder-container">
      <h2 className="thankyou">Thank you for your order</h2>
      <p>
      Your order number is <strong>#4005238</strong>. Check your email for confirmation and updates on your order.
      </p>
      <br />
      <br />
    </div>
  );
}

export default PlaceOrder;
