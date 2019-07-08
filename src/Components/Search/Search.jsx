import React from "react";
import "./Search.css";
import SearchImg from "./Search.svg";

export function Search() {
  return (
    <div className="search">
      <label htmlFor="search-label" className="search-label">
        <img src={SearchImg} alt="" />
      </label>
      <input
        type="search"
        className="search-input"
        placeholder="Search for restaurant or cuisine"
        id="search-label"
      />
    </div>
  );
}
