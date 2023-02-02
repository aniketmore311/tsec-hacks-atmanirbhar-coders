import React, { useState } from "react";
import axios from "axios";
import "./preference.css";

const Preference = ({ nextId, prevId, profileData, setProfile }) => {
  const [smoking, setSmoking] = useState(profileData.smokingPreference);
  const [food, setFood] = useState(profileData.foodPreference);

  const handleNext = () => {
    axios.patch('http://localhost:8080/api/v1/user/profile', {smokingPreference: smoking, 
    foodPreference: food
},{
        headers:{
          Authorization: "Bearer "+localStorage.getItem("access_token")
        }
      }).then(res => { setProfile(res.data)
        nextId();
    })
      .catch(err => console.log(err))
    
  }

  return (
    <div className="preference__container">
      <div className="preference__container_wrapper">
        <div className="form-pcontainer">
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
        <div className="form-pcontainer">
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

        <div className="preference__container-btns">
          <button type="button" onClick={prevId}>
            Prev
          </button>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preference;
