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

      <select
        value={ratingFilter}
        onChange={(e) => onRatingFilterChange(e.target.value)}
      >
        <option value="">Choose Rate</option>
        <option value="1">1 ⭐</option>
        <option value="2">2 ⭐⭐</option>
        <option value="3">3 ⭐⭐⭐</option>
        <option value="4">4 ⭐⭐⭐⭐</option>
        <option value="5">5 ⭐⭐⭐⭐⭐</option>
      </select>
      
    </div>
  );
}

export default Filter;
