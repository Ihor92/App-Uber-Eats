import React from "react";
import "./NavigationOfDishes.css";
import { restaurants } from "../InfoCard.js";

export function NavigationOfDishes(props) {
  return (
    <nav className="restaurant-navbar">
      <div className="restaurant-navbar__wrap">
        <ul className="restaurant-navbar__list">
          {restaurants.sections.map((sections, i) => {
            return (
              <li>
                <a
                  href="javascript: void(0)"
                  className="restaurant-navbar__link"
                >
                  {restaurants.sections.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
