import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "./FooterLogo.svg";

export function Footer() {
  return (
    <div className="footer">
      <Link className="footer_wrap" to="/">
        <img src={Logo} alt="" />
      </Link>
    </div>
  );
}
