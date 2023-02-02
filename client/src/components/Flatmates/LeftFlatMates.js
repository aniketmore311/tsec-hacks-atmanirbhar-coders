import React from "react";
import Cards from "./Cards";
import Search from "./Search";
import "./LeftFlatMates.css";

const LeftFlatMates = ({ flatmates }) => {
  return (
    <div
      className="LeftSide"
      style={{ width: "85%", paddingBottom: "50px", marginTop: "70px" }}
    >
      {/* <Search /> */}
      {flatmates.length === 0 ? (
        <p className="msg-container">No matches found....</p>
      ) : (
        <Cards flatmates={flatmates} />
      )}
    </div>
  );
};

export default LeftFlatMates;
