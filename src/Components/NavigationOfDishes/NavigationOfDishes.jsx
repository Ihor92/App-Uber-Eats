import React from "react";
import "./NavigationOfDishes.css";

export function NavigationOfDishes(props) {
  const { restaurant } = props;

  return (
    <nav className="navigation-of-dishes">
      <div className="navigation-of-dishes_wrap">
        <ul className="navigation-of-dishes__nav">
          {restaurant.sections.map((sections, i) => {
            return (
              <li key={i} className="navigation-of-dishes__list">
                <a
                  href="javascript: void(0)"
                  className="navigation-of-dishes__link"
                >
                  {sections.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
