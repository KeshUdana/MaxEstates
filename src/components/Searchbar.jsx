import React from "react";
import "../CSSFiles/SearchBar.css";

function SearchBar() {
    return (
        <>
            <div className="search">
    <form>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
            </div>
        </>
    );
}

export default SearchBar;
