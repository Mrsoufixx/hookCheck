import React from 'react';

function Filter({ titleFilter, ratingFilter, onTitleFilterChange, onRatingFilterChange }) {
  return (
    <div>
      <label htmlFor="title-filter">Filter by title:</label>
      <input
        id="title-filter"
        type="text"
        value={titleFilter}
        onChange={(e) => onTitleFilterChange(e.target.value)}
      />
      <br />
      <label htmlFor="rating-filter">Filter by rating:</label>
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
      </select>
    </div>
  );
}

export default Filter;
