import React from "react";
import { getPhotoUrl } from "../../../utils";
import "./profile.css";

const Profile = ({ id, nextId, profileData }) => {
  const { firstname, lastname, email, phoneNumber } = profileData.userId;

  // console.log(id)
  return (
    <div className="profile__container">
      <div className="profile__container_wrapper">
        <div className="profile__container-top">
          <img src={getPhotoUrl(firstname + " " + lastname)} alt="profileImage"></img>
          {/* <button type='button'>Upload Image</button> */}
        </div>

        <div className="profile__container-bottom">
          <div className="form-container">
            <label>First Name: </label>
            <input type="text" value={firstname}></input>
          </div>

          <div className="form-container">
            <label>Last Name: </label>
            <input type="text" value={lastname}></input>
          </div>

          <div className="form-container">
            <label>Email: </label>
            <input type="text" value={email}></input>
          </div>

          <div className="form-container">
            <label>Phone: </label>
            <input type="text" value={phoneNumber}></input>
          </div>
        </div>

        <div className="profile__container-btn">
          <button type="button" onClick={nextId}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
