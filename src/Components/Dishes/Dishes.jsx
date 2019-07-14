import React from "react";
import "./Dishes.css";
import { restaurants } from "../InfoCard.js";
import { Dish } from "../Dish/Dish";

export function Dishes(props) {
  return (
    <>
      {restaurants.sections.map((section, i) => {
        return (
          <div className="dishes dishes-wrap">
            <h4 className="dishes__title">{section.title}</h4>
            <ul className="dishes__list">
              <Dish section={section} />
            </ul>
          </div>
        );
      })}
    </>
  );
}
