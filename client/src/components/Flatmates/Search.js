import React, { useState } from "react";
import "./Search.css";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
                className="search-input"
            />
            <button className="search-button">
                <i className="fa fa-search"></i>
            </button>
            <br />
            <br />
            {/* <div className="search-result"> {searchTerm}</div> */}
        </div>
    );
};

export default Search;
