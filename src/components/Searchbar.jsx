import React from "react";
import "../CSSFiles/SearchBar.css";

function SearchBar() {
  return (
    <div className="border rounded p-4 bg-success bg-gradient">
      <form>
        <h2 className="mb-3 ">Search for properties to rent or buy...</h2>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="search"
            placeholder="e.g., House"
            aria-label="Search"
          />
        </div>
        <div className="d-flex gap-2">
          <button className="custom-button" type="submit">
            For Sale
          </button>
          <button className="custom-button" type="submit">
            To Rent
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
