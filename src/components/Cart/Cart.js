import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import pic from "../../images/11873.jpg";

const Cart = (props) => {
  console.log(props);
  return (
    <div className="iteam">
      <img src={pic} alt="" />
      <h5>{props.product.name}</h5>
      <button>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Cart;
