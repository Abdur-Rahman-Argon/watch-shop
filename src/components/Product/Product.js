import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { id, name, img, price } = product;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>Name: {name} </h3>
      <h4>Price: ${price}</h4>
      <button onClick={() => handleAddToCart(props.product)}>
        <span>Add To Cart</span>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
