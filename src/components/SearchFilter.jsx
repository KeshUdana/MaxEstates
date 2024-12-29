import React from "react";


function SearchFilter() {
  return (
    <div className="container text-center border rounded p-4 bg-light bg-gradient">
      <h2 className="mb-4">Search Filter</h2>

      {/* Property Type */}
      <div className="mb-4">
        <h4>Property Type</h4>
        <div className="row row-cols-3">
          {["House", "Apartment", "Condo", "Bungalow", "Cottage"].map((type) => (
            <div className="col" key={type}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`flexCheck${type}`}
                />
                <label className="form-check-label" htmlFor={`flexCheck${type}`}>
                  {type}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h4>Price Range</h4>
        <div className="row">
          <div className="col">
            <label htmlFor="priceMin" className="form-label">
              Min Price
            </label>
            <input
              type="number"
              className="form-control"
              id="priceMin"
              placeholder="Min Price"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
          <div className="col">
            <label htmlFor="priceMax" className="form-label">
              Max Price
            </label>
            <input
              type="number"
              className="form-control"
              id="priceMax"
              placeholder="Max Price"
            />
          </div>
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-4">
        <h4>Bedrooms</h4>
        <div className="row">
          <div className="col">
            <label htmlFor="bedroomsMin" className="form-label">
              Min Bedrooms
            </label>
            <input
              type="number"
              className="form-control"
              id="bedroomsMin"
              placeholder="Min Bedrooms"
            />
          </div>
          <div className="col">
            <label htmlFor="bedroomsMax" className="form-label">
              Max Bedrooms
            </label>
            <input
              type="number"
              className="form-control"
              id="bedroomsMax"
              placeholder="Max Bedrooms"
            />
          </div>
        </div>
      </div>

      {/* Date Added */}
      <div className="mb-4">
        <h4>Date Added</h4>
        <div className="row">
          <div className="col">
            <label htmlFor="dateAfter" className="form-label">
              After Date
            </label>
            <input
              type="date"
              className="form-control"
              id="dateAfter"
            />
          </div>
          <div className="col">
            <label htmlFor="dateBetween" className="form-label">
              Between Dates<p>k</p>
            </label>
            <input
              type="date"
              className="form-control"
              id="dateBetween"
            />
          </div>
        </div>
      </div>

      {/* Postcode Area */}
      <div className="mb-4">
        <h4>Postcode Area</h4>
        <input
          type="text"
          className="form-control"
          id="postcode"
          placeholder="Enter Postcode"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" className="btn btn-primary">
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default SearchFilter;
