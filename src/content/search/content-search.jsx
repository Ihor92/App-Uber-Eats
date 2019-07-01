import React from 'react';
import './content-search.css';
import search from './search.svg';

export function Search() {
  return (
    <div className="content__search-block">
      <label htmlFor="search-restaurant" className="search-restaurant">
        <img src={search} alt="" />
      </label>
      <input type="search" className="content__search" placeholder="Search for restaurant or cuisine" id="search-restaurant" />
    </div>
  )
}
