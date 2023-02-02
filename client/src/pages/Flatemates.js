import React from "react";
import LeftFlatMates from "../components/Flatmates/LeftFlatMates";
import RightFlatMates from "../components/Flatmates/RightFlatMates";
// import Cards from "../components/Flatmates/Cards";
// import Search from "../components/Flatmates/Search";

const Flatemates = () => {
    return (
        <div style={{ display: "flex" }}>
            <LeftFlatMates />
            <RightFlatMates />
        </div>
    );
};

export default Flatemates;
