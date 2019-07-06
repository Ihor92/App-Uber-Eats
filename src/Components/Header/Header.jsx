import React from "react";
import "./Header.css";
import { ButtonsSign } from "../Buttons/ButtonsSign";
import { ButtonCart } from "../Buttons/ButtonCart";
import { Link } from "react-router-dom";

import LogoHeader from "./logo-header.svg";
import Location from "./location.svg";

export function Header() {
  return (
    <div className="header">
      <div className="header__wrap">
        <Link className="hearder__logo" to="/">
          <img src={LogoHeader} alt="Logo Uber Eats" />
        </Link>

        <div className="location">
          <div className="location__wrap">
            <label htmlFor="asap" className="location__label">
              Asap
            </label>
          </div>
          <p className="location__text">to</p>
          <div className="location__delivery">
            <img src={Location} alt="" className="location__delivery-img" />
            <input
              type="text"
              className="locatinon__address"
              placeholder="ul. Tarasivska St, 16"
              id="asap"
            />
          </div>
        </div>

        <div className="authorization">
          <ButtonsSign />
          <ButtonCart />
        </div>
      </div>
    </div>
  );
}
