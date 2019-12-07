import React from "react";
import "./HeaderCard.css";

export function HeaderCard(props) {
  const { restaurant } = props;

  const background = `url(${restaurant.largeImageUrl})`;
  console.log(background);

  return (
    <div
      className="header-card"
      style={{ background: background, backgroundPosition: `center center` }}
    >
      <div className="header-card_wrap">
        <div className="header-card__content">
          <h2 className="header-card__title">{restaurant.title}</h2>
          <div className="header-card_wrapper">
            <div className="header-card__footer">
              <p className="header-card__kitchen">
                {restaurant.categories.map(({ name }) => `₴₴₴ • ${name}`)}
              </p>
              <button className="header-card__delivery">
                {restaurant.etaRange.min} - {restaurant.etaRange.max} Min
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
