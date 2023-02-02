import React, { useState } from "react";
import axios from "axios";
import "./bio.css";

const Bio = ({ id, nextId, prevId, profileData, setProfile }) => {
  const [dob, setDob] = useState(profileData.dateOfBirth);
  const [age, setAge] = useState(profileData.age);
  const [city, setCity] = useState(profileData.city);
  const [state, setState] = useState(profileData.state);
  const [gender, setGender] = useState(profileData.gender);
  const [marStatus, setMarStatus] = useState(profileData.maritalStatus);
  const [about, setAbout] = useState(profileData.bio);
  const [facebook, setFacebook] = useState(profileData.socialMediaLinks[0]);
  const [instagram, setInstagram] = useState(profileData.socialMediaLinks[1]);
  const [linkedin, setLinkedIn] = useState(profileData.socialMediaLinks[2]);
  //console.log(id)

  const handleNext = () => {
    axios
      .patch(
        "http://localhost:8080/api/v1/user/profile",
        {
          dateOfBirth: dob,
          age: age,
          city: city,
          state: state,
          gender: gender,
          maritalStatus: marStatus,
          bio: about,
          socialMediaLinks: [facebook, instagram, linkedin],
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then((res) => {
        setProfile(res.data);
        nextId();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bio__container">
      <div className="bio__container_wrapper">
        <h2>Bio</h2>
        <div className="bio__container-top">
          <div className="bio__container-topleft">
            <div className="form-container">
              <label>DOB: </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              ></input>
            </div>

            <div className="form-container">
              <label>Age: </label>
              <input
                type="text"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              ></input>
            </div>

            <div className="form-container">
              <label>City: </label>
              <input
                type="text"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              ></input>
            </div>

            <div className="form-container">
              <label>Gender: </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                name="gender"
                id="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div className="form-container">
              <label>Marital Status: </label>
              <select
                value={marStatus}
                onChange={(e) => setMarStatus(e.target.value)}
                name="marStatus"
                id="marStatus"
              >
                <option value="married">Married</option>
                <option value="single">Single</option>
              </select>
            </div>
          </div>

          <div className="bio__container-topright">
            <div className="form-container">
              <label>Facebook: </label>
              <input
                type="text"
                value={facebook}
                onChange={(e) => {
                  setFacebook(e.target.value);
                }}
              ></input>
            </div>

            <div className="form-container">
              <label>Instagram: </label>
              <input
                type="text"
                value={instagram}
                onChange={(e) => {
                  setInstagram(e.target.value);
                }}
              ></input>
            </div>

            <div className="form-container">
              <label>LinkedIn: </label>
              <input
                type="text"
                value={linkedin}
                onChange={(e) => {
                  setLinkedIn(e.target.value);
                }}
              ></input>
            </div>

            <div className="form-container">
              <label>State: </label>
              <input
                type="text"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              ></input>
            </div>
          </div>
        </div>

        <div className="bio__container-bottom">
          <h4>About Yourself</h4>
          <textarea
            rows="5"
            cols="70"
            value={about}
            style={{ padding: "7px" }}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>

        <div className="bio__container-btns">
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

export default Bio;
