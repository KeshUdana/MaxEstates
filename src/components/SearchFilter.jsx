import React from "react";
import "../CSSFiles/SearchFilter.css";

function SearchFilter() {
  return (
    <>
      <div className="Main SearchFilter">
        <form>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckHouse"
            />
            <label className="form-check-label" htmlFor="flexCheckHouse">
              House
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckApartment"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexCheckApartment">
              Apartment
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCondo"
            />
            <label className="form-check-label" htmlFor="flexCheckCondo">
              Condo
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckBungalow"
            />
            <label className="form-check-label" htmlFor="flexCheckBungalow">
              Bungalow
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckVilla"
            />
            <label className="form-check-label" htmlFor="flexCheckVilla">
              Villa
            </label>
          </div>

          <div className="priceRange">
            <label htmlFor="customRange1" className="form-label">
              Price Range
            </label>
            <input type="range" className="form-range" id="customRange1" />
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchFilter;
