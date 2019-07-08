import React from "react";
import "./Dishes.css";
import { restaurants } from "../InfoCard.js";

export function Dishes(props) {
  return (
    <div className="dishes__menu-block">
      <div className="dishes__nemu-description">
        <div className="dishes__nemu-wrap">
          <h4 className="dishes__name">{restaurants.sections.title}</h4>
          <span className="dishes__menu-details">С яйцом и огурцом</span>
          <span className="dishes__nemu-price nemu-price__wrap">240 ₴₴</span>
        </div>
      </div>
      <img
        src="img/menu/herring-on-bread.png"
        alt="Herring on bread"
        class="dishes__img"
      />
    </div>
  );
}
