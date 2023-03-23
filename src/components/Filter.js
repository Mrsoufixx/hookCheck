import React from "react";
import "./style/filter.css";

function Filter({
  titleFilter,
  ratingFilter,
  onTitleFilterChange,
  onRatingFilterChange,
}) {
  return (
    <div className="filter">
      <h2>Filter</h2>

      <div class="form__group field">
        <input
          type="text"
          value={titleFilter}
          class="form__field"
          placeholder="Title"
          name="title"
          onChange={(e) => onTitleFilterChange(e.target.value)}
          id="title-filter"
          required
        />
        <label htmlFor="title-filter" class="form__label">
          Title
        </label>
      </div>
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
