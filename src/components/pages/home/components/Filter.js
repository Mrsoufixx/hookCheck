import React from "react";
import "../style/filter.css";
import { FaStar } from "react-icons/fa"

function Filter({
  titleFilter,
  ratingFilter,
  onTitleFilterChange,
  onRatingFilterChange,
}) {
  return (
    <div className="filter">
      <h2>Filter</h2>

      <div className="form__group field">
        <input
          type="text"
          value={titleFilter}
          className="form__field"
          placeholder="Title"
          name="title"
          onChange={(e) => onTitleFilterChange(e.target.value)}
          id="title-filter"
          required
        />
        <label htmlFor="title-filter" className="form__label">
          Title
        </label>
      </div>

      <select
        value={ratingFilter}
        onChange={(e) => onRatingFilterChange(e.target.value)}
      >
        <option value="" hidden>Choose Rate </option>

        <option value="">All </option>
        <option value="1">1 ⭐</option>
        <option value="2">2 ⭐</option>
        <option value="3">3 ⭐</option>
        <option value="4">4 ⭐</option>
        <option value="5">5 ⭐</option>
      </select>
      
    </div>
  );
}

export default Filter;
