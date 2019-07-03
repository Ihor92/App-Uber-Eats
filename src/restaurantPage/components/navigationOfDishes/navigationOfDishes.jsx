import React from "react";
import "./navigationOfDishes.css";
import { restaurants } from "../../infoCard.js";

export function NavigationOfDishes(props) {
  return (
    <nav className="restaurant-navbar">
      <div className="restaurant-navbar__wrap">
        <ul className="restaurant-navbar__list">
          {restaurants.map((restaurants, i) => {
            return (
              <li>
                <a href="javascript: void(0)" className="restaurant-navbar__link">
                  {props.sections.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
