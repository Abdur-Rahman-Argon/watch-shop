import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Selected from "../Selected/Selected";

import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];

    if (newCart.length > 4) {
      return alert("maximum Four iteam select");
    } else if (
      newCart[0]?.id === newCart[1]?.id ||
      newCart[0]?.id === newCart[2]?.id ||
      newCart[0]?.id === newCart[3]?.id
    ) {
      return;
    } /*  else if (
      newCart[2]?.id === newCart[1]?.id ||
      newCart[3]?.id === newCart[2]?.id ||
      newCart[1]?.id === newCart[3]?.id
    ) {
      return;
    }  */ else {
      setCart(newCart);
    }
  };
  const [select, setSelect] = useState([]);
  const randomUser = () => {
    const productIteam = Math.floor(Math.random() * cart.length);
    if (cart.length == 0) {
      return;
    } else {
      setSelect(cart[productIteam]);
    }
  };
  const clearSlectedIteam = () => {
    const cleareCart = [];
    setCart(cleareCart);
    setSelect(cleareCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <div className="cart">
          <h2>Slected Watch:</h2>
          {cart.map((iteam) => (
            <Cart key={iteam.id} product={iteam}></Cart>
          ))}
          <button onClick={randomUser} className="choose-btn">
            Choose One for me
          </button>
          <br />
          <button onClick={clearSlectedIteam} className="select-btn">
            Select again
          </button>
          <div>
            <Selected key={select.id} selectedProduct={select}></Selected>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
