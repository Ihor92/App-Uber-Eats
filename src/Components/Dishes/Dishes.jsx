import React from "react";
import "./Dishes.css";
import { restaurants } from "../InfoCard.js";

export function Dishes(props) {
  return (
    <>
      {restaurants.sections.map((section, i) => {
        return (
          <div className="dishes dishes-wrap">
            <h4 className="dishes-title">{section.title}</h4>
            <ul className="dishes-list">
              {section.itemUuids.map((item, i) => {
                let dishPhoto = restaurants.items[item].imageUrl;
                return (
                  <>
                    <li className="dishes-item dishes-item__wrap" key={i}>
                      <div className="dishes-item__content">
                        <h5 className="dishes-menu__subtitle">
                          {restaurants.items[item].title}
                        </h5>
                        <span className="dishes-description">
                          {restaurants.items[item].itemDescription}
                        </span>
                        <span className="dishes-price">
                          {restaurants.items[item].price / 100 + " ₴"}
                        </span>
                      </div>

                      {dishPhoto && (
                        <div className="dishes-block__img">
                          <img
                            src={restaurants.items[item].imageUrl}
                            alt=""
                            className="dishes-img"
                          />
                        </div>
                      )}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
