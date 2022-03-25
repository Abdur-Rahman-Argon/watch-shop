import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const products = [
    { id: 1, name: "Mi Smart Band 4", price: 6520 },
    { id: 2, name: "Fitbit FB507BKBK Versa", price: 3128 },
    { id: 3, name: "Noise Colorfit Pro 2", price: 4123 },
    { id: 4, name: "HONOR Band 5", price: 2120 },
    { id: 5, name: "Garmin Forerunner 245", price: 3424 },
    { id: 6, name: "Samsung Galaxy Watch", price: 4620 },
    { id: 7, name: "Amazfit Bip U Smart Watch", price: 3849 },
    { id: 8, name: "Noise ColorFit Pro Smartwatch", price: 5410 },
    { id: 9, name: "Fastrack Reflex 2.0 Watches ", price: 4320 },
    { id: 10, name: "Fossil Gen 5 Carlyle ", price: 5120 },
    { id: 11, name: "Apple Watch Series 5", price: 4820 },
    { id: 12, name: "Apple Watch Nike", price: 5220 },
  ];
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    if (newCart.length > 4) {
      return alert("maximum Four iteam select");
    } else {
      setCart(newCart);
    }
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
          <button className="choose-btn">Choose One for me</button>
          <br />
          <button className="select-btn">Select again</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
