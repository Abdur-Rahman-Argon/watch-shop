import React from "react";

const Cart = (props) => {
  return (
    <div>
      <h2>Slected Watch:</h2>
      <h4>cart iteam{props.cart.length}</h4>
    </div>
  );
};

export default Cart;
