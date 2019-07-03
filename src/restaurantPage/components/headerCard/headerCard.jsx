import React from "react";
import "./headerCard.css";
import { restaurants } from "../../infoCard.js";

export function HeaderCard(props) {
  return (
    <div className="restaurant-offer">
      <div className="restaurant__wrap">
        <div className="restaurant__card">
          <h2 className="restaurant__card-title">{restaurants.title}</h2>
          <div className="restaurant__card-wrap">
            <div className="restaurant__card-footer">
              <p className="restaurant__kitchen">
                {restaurants.categories.map(category => {
                  return "₴₴₴ " + "• " + category.name;
                })}
              </p>
              <button className="restaurant__time-delivery">
                {restaurants.etaRange.min} - {restaurants.etaRange.max} Min
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
