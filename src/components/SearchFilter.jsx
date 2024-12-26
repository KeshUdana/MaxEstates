import React from "react";

function SearchFilter() {
  return (
    <>
      <div>
        <form>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">House</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">Apartment</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">Condo</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">Bungalow</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">Villa</label>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchFilter;
