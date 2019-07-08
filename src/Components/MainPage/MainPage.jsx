import React from "react";
import "./MainPage.css";

import { Search } from "../Search/Search";
import { RestaurantsCards } from "../RestaurantsCards/RestaurantsCards";

export function MainPage() {
  return (
    <div className="content">
      <div className="content__wrap">
        <Search />

        <h1 className="content-title">Kyiv Restaurants</h1>
        <div className="restaurant">
          <RestaurantsCards />
        </div>
      </div>
    </div>
  );
}
