import React from "react";
import "./headerCard.css";
import { restaurants } from "../../infoCard.js";

export function HeaderCard(props) {
  return (
    <div className="restaurant">
      <div className="restaurant__wrap">
        <div className="restaurant__card">
          <h2 className="restaurant__card-title">{props.title}</h2>
          <div className="restaurant__card-wrap">
            <div className="restaurant__card-footer">
              <p className="restaurant__kitchen">₴₴₴ • Европейская</p>
              <button className="restaurant__time-delivery">40 - 50 Min</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
