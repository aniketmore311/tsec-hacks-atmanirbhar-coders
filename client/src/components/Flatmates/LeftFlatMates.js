import React from "react";
import Cards from "./Cards";
import Search from "./Search";

const LeftFlatMates = () => {
    return (
        <div
            className="LeftSide"
            style={{ width: "85%", paddingBottom: "50px", marginTop: "70px" }}
        >
            <Search />
            <Cards />
        </div>
    );
};

export default LeftFlatMates;
