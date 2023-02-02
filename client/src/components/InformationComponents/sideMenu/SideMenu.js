import React from "react";
import "./sideMenu.css";
const SideMenu = () => {
  return (
    <div className="sidemenu__container">
      <div className="sidemenu__container_wrapper">
        <a href="" className="sidemenu__container-link">
          Profile
        </a>
        <hr></hr>
        <a href="" className="sidemenu__container-link">
          Bio
        </a>
        <hr></hr>
        <a href="" className="sidemenu__container-link">
          Students/Profession
        </a>
        <hr></hr>
        <a href="" className="sidemenu__container-link">
          Preferences
        </a>
        <hr></hr>
        <a href="" className="sidemenu__container-link">
          Interests
        </a>
        <hr></hr>
      </div>
    </div>
  );
};

export default SideMenu;
