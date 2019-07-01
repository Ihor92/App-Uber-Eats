import React from 'react';
import './footer.css';
import logo from './logo.svg';

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrap">
        <img src={logo} />
      </div>
    </div>
  )
}