import React, { useState } from "react";
import data from "../data/properties.json";

function SearchFilter() {
  const [filters, setFilters] = useState({
    type: [],
    priceMin: "",
    priceMax: "",
    bedroomsMin: "",
    bedroomsMax: "",
    dateAfter: "",
    dateBetween: "",
    postcode: "",
  });

  const [results, setResults] = useState([]);

  const handleFilterChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        type: checked ? [...prev.type, id.replace("flexCheck", "")] : prev.type.filter((t) => t !== id.replace("flexCheck", "")),
      }));
    } else {
      setFilters((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSearch = () => {
    const filtered = data.properties.filter((property) => {
      const matchesType =
        filters.type.length === 0 || filters.type.includes(property.type);
      const matchesPrice =
        (!filters.priceMin || property.price >= parseInt(filters.priceMin)) &&
        (!filters.priceMax || property.price <= parseInt(filters.priceMax));
      const matchesBedrooms =
        (!filters.bedroomsMin || property.bedrooms >= parseInt(filters.bedroomsMin)) &&
        (!filters.bedroomsMax || property.bedrooms <= parseInt(filters.bedroomsMax));
      const matchesDate =
        (!filters.dateAfter || new Date(property.dateAdded) >= new Date(filters.dateAfter)) &&
        (!filters.dateBetween || new Date(property.dateAdded) <= new Date(filters.dateBetween));
      const matchesPostcode =
        !filters.postcode || property.postcode.toLowerCase().includes(filters.postcode.toLowerCase());

      return matchesType && matchesPrice && matchesBedrooms && matchesDate && matchesPostcode;
    });
    setResults(filtered);
  };

  return (
    <div className="container text-center border rounded p-3 bg-light bg-gradient">
      <h2 className="mb-3">Search Filter</h2>

      {/* Property Type */}
      <div className="mb-3">
        <h4 className="h6">Property Type</h4>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {["House", "Apartment", "Condo", "Bungalow", "Cottage"].map((type) => (
            <div className="form-check form-check-inline" key={type}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`flexCheck${type}`}
                onChange={handleFilterChange}
              />
              <label className="form-check-label" htmlFor={`flexCheck${type}`}>
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="row mb-3 gx-2">
        <div className="col-6">
          <label htmlFor="priceMin" className="form-label small">
            Min Price
          </label>
          <input
            type="number"
            className="form-control"
            id="priceMin"
            placeholder="Min Price"
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-6">
          <label htmlFor="priceMax" className="form-label small">
            Max Price
          </label>
          <input
            type="number"
            className="form-control"
            id="priceMax"
            placeholder="Max Price"
            onChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div className="row mb-3 gx-2">
        <div className="col-6">
          <label htmlFor="bedroomsMin" className="form-label small">
            Min Bedrooms
          </label>
          <input
            type="number"
            className="form-control"
            id="bedroomsMin"
            placeholder="Min Bedrooms"
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-6">
          <label htmlFor="bedroomsMax" className="form-label small">
            Max Bedrooms
          </label>
          <input
            type="number"
            className="form-control"
            id="bedroomsMax"
            placeholder="Max Bedrooms"
            onChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Date Added */}
      <div className="row mb-3 gx-2">
        <div className="col-6">
          <label htmlFor="dateAfter" className="form-label small">
            After Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dateAfter"
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-6">
          <label htmlFor="dateBetween" className="form-label small">
            Between Dates
          </label>
          <input
            type="date"
            className="form-control"
            id="dateBetween"
            onChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Postcode Area */}
      <div className="mb-3">
        <label htmlFor="postcode" className="form-label small">
          Postcode Area
        </label>
        <input
          type="text"
          className="form-control"
          id="postcode"
          placeholder="Enter Postcode"
          onChange={handleFilterChange}
        />
      </div>

      {/* Submit Button */}
      <div>
        <button type="button" className="btn btn-primary w-100" onClick={handleSearch}>
          Apply Filters
        </button>
      </div>

      {/* Results */}
      <div className="mt-3">
        <h4>Results</h4>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchFilter;
