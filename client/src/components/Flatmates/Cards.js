import { useState } from "react";
import { CardData } from "./CardData";
import CardComponent from "./CardComponent";

function Cards({ flatmates }) {
  return (
    <div
      className="row row-cols-1 row-cols-md-3 g-4 "
      style={{
        width: "80%",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      {flatmates.map((data, index) => {
        return <CardComponent key={index} data={data} />;
      })}
    </div>
  );
}

export default Cards;
