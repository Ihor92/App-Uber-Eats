import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import { Authorization } from "../Authorization/Authorization";
import HeaderLogo from "./img/HeaderLogo.svg";
import Location from "./img/Location.svg";

export function Header() {
  return (
    <div className="header">
      <div className="header_wrap">
        <Link className="hearder__logo" to="/">
          <img src={HeaderLogo} alt="Logo Uber Eats" />
        </Link>

        <div className="header__location">
          <div className="header__location-wrap">
            <label htmlFor="asap" className="header__location-label">
              Asap
            </label>
          </div>
          <p className="header__location-text">to</p>
          <div className="header__location-delivery">
            <img src={Location} alt="" className="header__location-img" />
            <input
              type="text"
              className="header__locatinon-address"
              placeholder="ul. Tarasivska St, 16"
              id="asap"
            />
          </div>
        </div>
        <Authorization />
      </div>
    </div>
  );
}
