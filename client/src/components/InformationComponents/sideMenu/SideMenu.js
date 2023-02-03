import React from "react";
import "./sideMenu.css";
const SideMenu = ({ activeId, setId }) => {
  const changeActive = (n) => {
    setId(n);
  };
  return (
    <div
      className="sidemenu__container"
      style={{ boxShadow: "0px 4px 10px 0px rgba(255,255,255,0.75)" }}
    >
      <div className="sidemenu__container_wrapper">
        {activeId === 1 ? (
          <p href="" className="active sidemenu__container-link">
            Profile
          </p>
        ) : (
          <p
            onClick={() => changeActive(1)}
            className="sidemenu__container-link"
          >
            Profile
          </p>
        )}
        <hr></hr>
        {activeId === 2 ? (
          <p href="" className="active sidemenu__container-link">
            Bio
          </p>
        ) : (
          <p
            onClick={() => changeActive(2)}
            className="sidemenu__container-link"
          >
            Bio
          </p>
        )}
        <hr></hr>
        {activeId === 3 ? (
          <p href="" className="active sidemenu__container-link">
            Student/Profession
          </p>
        ) : (
          <p
            onClick={() => changeActive(3)}
            className="sidemenu__container-link"
          >
            Student/Profession
          </p>
        )}
        <hr></hr>
        {activeId === 4 ? (
          <p href="" className="active sidemenu__container-link">
            Preferences
          </p>
        ) : (
          <p
            onClick={() => changeActive(4)}
            className="sidemenu__container-link"
          >
            Preferences
          </p>
        )}
        <hr></hr>
        {activeId === 5 ? (
          <p href="" className="active sidemenu__container-link">
            Interests
          </p>
        ) : (
          <p
            onClick={() => changeActive(5)}
            className="sidemenu__container-link"
          >
            Interests
          </p>
        )}
        <hr></hr>
      </div>
    </div>
  );
};

export default SideMenu;
