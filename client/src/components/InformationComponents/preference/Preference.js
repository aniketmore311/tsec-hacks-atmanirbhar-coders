import React, { useState } from "react";
import "./preference.css";

const Preference = ({ nextId, prevId }) => {
  const [smoking, setSmoking] = useState("");
  const [food, setFood] = useState("");
  return (
    <div className="preference__container">
      <div className="preference__container_wrapper">
        <div className="form-container">
          <label>Smoking preference</label>
          <select
            value={smoking}
            onChange={(e) => setSmoking(e.target.value)}
            name="smoking"
            id="smoking"
          >
            <option value="Yes">Yes, I smoke</option>
            <option value="No">No, I don't smoke</option>
          </select>
        </div>
        <div className="form-container">
          <label>Food preference</label>
          <select
            value={food}
            onChange={(e) => setFood(e.target.value)}
            name="food"
            id="food"
          >
            <option value="Non-Veg">Non Veg</option>
            <option value="Veg">Veg</option>
            <option value="Jain">Jain</option>
            <option value="Vegan">Vegan</option>
          </select>
        </div>

        <div className="profession__container-btns">
          <button type="button" onClick={prevId}>
            Prev
          </button>
          <button type="button" onClick={nextId}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preference;
