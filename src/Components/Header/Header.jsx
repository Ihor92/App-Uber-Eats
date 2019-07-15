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

        <div className="location">
          <div className="location_wrap">
            <label htmlFor="asap" className="location__label">
              Asap
            </label>
          </div>
          <p className="location__text">to</p>
          <div className="location__delivery">
            <img src={Location} alt="" className="location__delivery_img" />
            <input
              type="text"
              className="locatinon__address"
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
