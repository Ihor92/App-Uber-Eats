import React from 'react';
import './buttons.css';
import cart from './add-to-cart.svg';

export function AuthorizationButtons() {
  return (
    <div className="authorization__buttons">
      <button className="authorization__sing-in">Sign In</button>
      <button className="authorization__registration">Register</button>
    </div>
  )
}

export function Cart() {
  return (
    <button className="cart">
      <img src={cart} alt="Box" className="box"/>
    </button>
  )
}