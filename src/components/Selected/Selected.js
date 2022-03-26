import React from "react";
import "./Selected.css";

const Selected = (props) => {
  const { name, img } = props.selectedProduct;
  return (
    <div className="selectIteam">
      <img src={img} alt="" />
      <h5>{name}</h5>
    </div>
  );
};

export default Selected;
