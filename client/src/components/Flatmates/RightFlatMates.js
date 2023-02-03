import React, { useEffect, useState } from "react";
import "./RightFlatMates.css";

const RightFlatMates = ({ flatmates, setFilterFlatMate }) => {
  const [showAll, setShowAll] = useState(true);
  const [filterOptions, setFilterOptions] = useState({
    gender: "male",
    smoking: "yes",
    maratialstatus: "single",
    category: "student",
    city: "Mumbai",
  });
  console.log("filter", filterOptions);
  const handleOptionChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilterOptions({ ...filterOptions, [name]: value });
  };

  useEffect(() => {
    if (showAll) {
      setFilterFlatMate(flatmates);
    } else {
      const expression = flatmates.filter((item) => {
        return (
          item.profile.gender === filterOptions.gender &&
          item.profile.smokingPreference === filterOptions.smoking &&
          item.profile.maritalStatus === filterOptions.maratialstatus &&
          item.profile.type === filterOptions.category &&
          item.profile.city === filterOptions.city
        );
      });
      setFilterFlatMate(expression);
    }
  }, [filterOptions, showAll]);

  return (
    <div className="right_container">
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "42px",
          boxShadow: "0px 4px 10px 0px rgba(255,255,255,0.75)",
        }}
      >
        <h1
          style={{
            fontSize: "21px",
            textAlign: "center",
            paddingBottom: "8px",
          }}
        >
          Matchings
        </h1>

        <label htmlFor="selectAll" className="LabelColor">
          Select All
        </label>
        <input
          type={"checkbox"}
          checked={showAll}
          onChange={(e) => {
            setShowAll((prev) => !prev);
          }}
        ></input>
        <label htmlFor="gender" className="LabelColor">
          Gender
        </label>
        <select
          value={filterOptions.name}
          name="gender"
          onChange={handleOptionChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <hr></hr>
        <label htmlFor="smoking" className="LabelColor">
          Smoking Status
        </label>
        <select
          value={filterOptions.name}
          name="smoking"
          onChange={handleOptionChange}
        >
          <option value="yes">Smoking</option>
          <option value="no">Not Smoking</option>
        </select>
        <hr></hr>
        <label htmlFor="maratialstatus" className="LabelColor">
          Maratial Status
        </label>
        <select
          value={filterOptions.name}
          name="maratialstatus"
          onChange={handleOptionChange}
        >
          <option value="single">Single </option>
          <option value="married">Married</option>
        </select>
        <hr></hr>
        <label htmlFor="category" className="LabelColor">
          Profession
        </label>
        <select
          value={filterOptions.name}
          name="category"
          onChange={handleOptionChange}
        >
          <option value="student">Student </option>
          <option value="professional">Working Professional</option>
        </select>
        <label htmlFor="city" className="LabelColor">
          City
        </label>
        <input
          value={filterOptions.city}
          onChange={(e) => {
            setFilterOptions({ ...filterOptions, city: e.target.value });
          }}
        ></input>
      </div>
    </div>
  );
};

export default RightFlatMates;
