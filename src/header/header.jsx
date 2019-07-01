import React from 'react';
import './header.css';
import {AuthorizationButtons} from '../buttons/buttons';
import {Cart} from '../buttons/buttons';
import logoHeader from './logo-header.svg';
import location from './location.svg';

export function Header() {
  return (
    <div className="header">
      <div className="header__wrap-content">

        <div className="hearder__logo">
          <img src={logoHeader} alt="Logo Uber Eats" />
        </div>

        <div className="location">
          <div className="location__label">
            <label htmlFor="asap" className="location__label-asap">Asap</label>
          </div>
          <p className="location__asap-to">to</p>
          <div className="location__delivery">
            <img src={location} alt="" className="location__delivery-img" />
            <input type="text" className="locatinon__address" placeholder="ul. Tarasivska St, 16" id="asap" />
          </div>
        </div>

        <div className="authorization">
          <AuthorizationButtons />
          <Cart />
        </div>
      </div>
    </div>
  )
}