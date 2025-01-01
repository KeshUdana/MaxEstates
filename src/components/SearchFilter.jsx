import React, { useState } from "react";

// Sample JSON data (you'll replace this with your actual data import)
const data = require("../data/properties.json").properties;

function SearchFilter() {
  const [filters, setFilters] = useState({
    propertyTypes: [],
    priceMin: "",
    priceMax: "",
    bedroomsMin: "",
    bedroomsMax: "",
    dateAfter: "",
    dateBefore: "",
    postcode: "",
  });

  const [filteredData, setFilteredData] = useState(data);

  // Handle checkbox change for property types
  const handleCheckboxChange = (type) => {
    setFilters((prev) => {
      const newTypes = prev.propertyTypes.includes(type)
        ? prev.propertyTypes.filter((t) => t !== type)
        : [...prev.propertyTypes, type];
      return { ...prev, propertyTypes: newTypes };
    });
  };

  // Handle input changes for other filters
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFilters((prev) => ({ ...prev, [id]: value }));
  };

  // Apply filters
  const applyFilters = () => {
    let results = data;

    // Filter by property types
    if (filters.propertyTypes.length > 0) {
      results = results.filter((item) =>
        filters.propertyTypes.includes(item.type)
      );
    }

    // Filter by price range
    if (filters.priceMin) {
      results = results.filter((item) => item.price >= parseInt(filters.priceMin));
    }
    if (filters.priceMax) {
      results = results.filter((item) => item.price <= parseInt(filters.priceMax));
    }

    // Filter by bedrooms
    if (filters.bedroomsMin) {
      results = results.filter((item) => item.bedrooms >= parseInt(filters.bedroomsMin));
    }
    if (filters.bedroomsMax) {
      results = results.filter((item) => item.bedrooms <= parseInt(filters.bedroomsMax));
    }

    // Filter by date
    if (filters.dateAfter) {
      const afterDate = new Date(filters.dateAfter);
      results = results.filter((item) => {
        const itemDate = new Date(
          `${item.added.year}-${item.added.month}-${item.added.day}`
        );
        return itemDate >= afterDate;
      });
    }

    if (filters.dateBefore) {
      const beforeDate = new Date(filters.dateBefore);
      results = results.filter((item) => {
        const itemDate = new Date(
          `${item.added.year}-${item.added.month}-${item.added.day}`
        );
        return itemDate <= beforeDate;
      });
    }

    // Filter by postcode (simple substring match)
    if (filters.postcode) {
      results = results.filter((item) =>
        item.location.toLowerCase().includes(filters.postcode.toLowerCase())
      );
    }

    setFilteredData(results);
  };

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
                  checked={filters.propertyTypes.includes(type)}
                  onChange={() => handleCheckboxChange(type)}
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
              value={filters.priceMin}
              onChange={handleInputChange}
              placeholder="Min Price"
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
              value={filters.priceMax}
              onChange={handleInputChange}
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
              value={filters.bedroomsMin}
              onChange={handleInputChange}
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
              value={filters.bedroomsMax}
              onChange={handleInputChange}
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
              value={filters.dateAfter}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="dateBefore" className="form-label">
              Before Date
            </label>
            <input
              type="date"
              className="form-control"
              id="dateBefore"
              value={filters.dateBefore}
              onChange={handleInputChange}
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
          value={filters.postcode}
          onChange={handleInputChange}
          placeholder="Enter Postcode"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button type="button" className="btn btn-primary" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>

      {/* Display Results */}
      <div className="mt-4">
        <h3>Results</h3>
        <ul className="list-group">
          {filteredData.map((item) => (
            <li className="list-group-item" key={item.id}>
              <h5>{item.type} - {item.price}</h5>
              <p>{item.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchFilter;
