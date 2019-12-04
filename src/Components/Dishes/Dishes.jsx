import React from "react";
import "./Dishes.css";
import { Dish } from "../Dish/Dish";

export function Dishes(props) {
  const { restaurant } = props;
  return (
    <>
      {restaurant.sections.map((section, i) => {
        return (
          <div className="dishes dishes_wrap" key={i}>
            <h4 className="dishes__title">{section.title}</h4>
            <ul className="dishes__list">
              <Dish section={section} restaurant={restaurant} />
            </ul>
          </div>
        );
      })}
    </>
  );
}
