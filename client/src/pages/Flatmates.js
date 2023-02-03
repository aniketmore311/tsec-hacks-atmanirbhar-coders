import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import LeftFlatMates from "../components/Flatmates/LeftFlatMates";
import RightFlatMates from "../components/Flatmates/RightFlatMates";
// import Cards from "../components/Flatmates/Cards";
// import Search from "../components/Flatmates/Search";

const Flatmates = () => {
  const [flatmates, setFlatmates] = useState([]);
  const [filterFlatmate, setFilterFlatMate] = useState([]);

  const [loading, setLoading] = useState(true);

  console.log("flatmates", flatmates);
  console.log("filterFlatmate", filterFlatmate);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/user/profile/matches", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((resp) => {
        setFlatmates(resp.data);
        setFilterFlatMate(resp.data);
        setLoading(false);
      })
      .catch(console.log);
  }, []);
  if (loading) {
    return <p>loading ...</p>;
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
        <LeftFlatMates flatmates={filterFlatmate} />
        <RightFlatMates
          flatmates={flatmates}
          setFilterFlatMate={setFilterFlatMate}
        />
      </div>
    </>
  );
};

export default Flatmates;
