import React from "react";
import "./HeaderCard.css";
import { restaurants } from "../InfoCard.js";

export function HeaderCard(props) {
  return (
    <div className="header-card">
      <div className="header-card__wrap">
        <div className="header-card__content">
          <h2 className="header-card__title">{restaurants.title}</h2>
          <div className="header-card__wrapper">
            <div className="header-card__footer">
              <p className="header-card__kitchen">
                {restaurants.categories.map(category => {
                  return "₴₴₴ " + "• " + category.name;
                })}
              </p>
              <button className="header-card__delivery">
                {restaurants.etaRange.min} - {restaurants.etaRange.max} Min
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
