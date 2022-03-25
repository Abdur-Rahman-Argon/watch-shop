import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import pic from "../../images/11873.jpg";
import "./Product.css";

const Product = (props) => {
  const { id, name, img, price } = props.product;

  return (
    <div className="cart">
      <img src={pic} alt="" />

      <h3>Name: {name} </h3>
      <h4>Price: ${price}</h4>
      <button>
        <span>Add To Cart</span>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;