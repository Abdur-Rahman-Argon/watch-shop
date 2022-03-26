import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const { name, img } = props.product;
  return (
    <div className="iteam">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <button>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Cart;
