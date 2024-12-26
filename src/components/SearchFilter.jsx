import React from "react";

function SearchFilter() {
  return (
    <>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="propertyType">Property Type</label>
            <div id="propertyType">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="houseCheck"
                />
                <label className="form-check-label" htmlFor="houseCheck">
                  House
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="bungalowCheck"
                />
                <label className="form-check-label" htmlFor="bungalowCheck">
                  Bungalow
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="apartmentCheck"
                />
                <label className="form-check-label" htmlFor="apartmentCheck">
                  Apartment
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="condoCheck"
                />
                <label className="form-check-label" htmlFor="condoCheck">
                  Condo
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="villaCheck"
                />
                <label className="form-check-label" htmlFor="villaCheck">
                  Villa
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchFilter;
