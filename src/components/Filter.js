import React from 'react';
import  "./style/filter.css"

function Filter({ titleFilter, ratingFilter, onTitleFilterChange, onRatingFilterChange }) {
  return (
    <div className='filter'>
      <h2>Filter</h2>
      <label htmlFor="title-filter">By title:</label>
      <input
        id="title-filter"
        type="text"
        value={titleFilter}
        onChange={(e) => onTitleFilterChange(e.target.value)}
      />
      <br />
      <label htmlFor="rating-filter">By rating:</label>
      <select
        id="rating-filter"
        value={ratingFilter}
        onChange={(e) => onRatingFilterChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
        <option value="6">6 stars</option>
        <option value="7">7 stars</option>
        <option value="8">8 stars</option>
        <option value="9">9 stars</option>
        <option value="10">10 stars</option>

      </select>
    </div>
  );
}

export default Filter;
