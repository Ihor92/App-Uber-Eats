import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "./logo.svg";

export function Footer() {
  return (
    <div className="footer">
      <Link className="footer__wrap" to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}
