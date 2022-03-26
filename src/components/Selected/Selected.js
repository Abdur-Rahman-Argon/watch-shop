import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Selected.css";
import pic from "../../images/11873.jpg";

const Selected = (props) => {
  const { name } = props.selectedProduct;
  return (
    <div className="selectIteam">
      <img src={pic} alt="" />
      <h5>{name}</h5>
    </div>
  );
};

export default Selected;
