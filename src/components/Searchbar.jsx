import React from "react";
import "../CSSFiles/SearchBar.css";

function SearchBar() {
    return (
        <>
            <div className="search">
                <div className="input">
                    <input type="text" placeholder="Search" />
                    <button type="button" className="btn btn-primary">
                        Search
                    </button>
                </div>
            </div>
        </>
    );
}

export default SearchBar;
