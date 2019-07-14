import React from "react";
import "./MainPage.css";

import { Search } from "../Search/Search";
import { RestaurantsCards } from "../RestaurantsCards/RestaurantsCards";

export function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page_wrap">
        <Search />

        <h1 className="main-page__title">Kyiv Restaurants</h1>
        <RestaurantsCards />
      </div>
    </div>
  );
}
