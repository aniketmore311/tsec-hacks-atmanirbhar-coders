import React from "react";
import { useState } from "react";
import axios from "axios";
import "./hobbies.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Hobbies = ({ nextId, prevId, profileData, setProfile }) => {
  const navigate = useNavigate();
  const [hobbies, setHobbies] = useState(profileData.interests);
  const [value, setValue] = useState("");

  const addItem = () => {
    setHobbies([...hobbies, value]);
    setValue("");
  };

  const inputEnter = (e) => {
    if (e.keyCode === 13) {
      addItem();
    }
  };

  const handleNext = () => {
    axios
      .patch(
        "http://localhost:8080/api/v1/user/profile",
        { interests: hobbies },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then((res) => {
        setProfile(res.data);
        // nextId();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="hobbies__container"
      style={{ boxShadow: "0px 4px 10px 0px rgba(255,255,255,0.75)" }}
    >
      <div className="hobbies__container_wrapper">
        <div className="form-container">
          <label for="hobbyName">Hobby: </label>
          <input
            type="text"
            name="hobbyName"
            id="hobbyItem"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={inputEnter}
          />
          <button type="submit" onClick={addItem}>
            Add
          </button>
        </div>

        <div className="listItems">
          {hobbies.map((item, index) => {
            return (
              <p>
                {index + 1}. {item}
              </p>
            );
          })}
        </div>

        <div className="bio__container-btns">
          <button type="button" onClick={prevId}>
            Prev
          </button>
          <button type="button" onClick={handleNext}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
