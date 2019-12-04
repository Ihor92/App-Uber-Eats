import React from "react";
import "./Search.css";
import SearchImg from "./img/Search.svg";

export function Search(props) {
  const { value, onChange } = props;
  return (
    <div className="search">
      <label htmlFor="search-label" className="search__label">
        <img src={SearchImg} alt="" />
      </label>
      <input
        type="search"
        placeholder="Search for restaurant or cuisine"
        value={value}
        onChange={onChange}
        className="search__input"
        id="search-label"
      />
    </div>
  );
}
