import React from "react";
import "./ButtonCart.css";
import Cart from "./img/Cart.svg";

export function ButtonCart() {
  return (
    <button className="button-cart">
      <img src={Cart} alt="Box" className="button-cart__img" />
    </button>
  );
}
