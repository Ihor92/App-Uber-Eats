import React from "react";
import "./Search.css";
import SearchImg from "./img/Search.svg";

export function Search() {
  return (
    <div className="search">
      <label htmlFor="search-label" className="search__label">
        <img src={SearchImg} alt="" />
      </label>
      <input
        type="search"
        className="search__input"
        placeholder="Search for restaurant or cuisine"
        id="search-label"
      />
    </div>
  );
}
