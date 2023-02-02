import React from "react";
import "./CardComponent.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ data }) => {
  const navigate = useNavigate();

  const openProfile = () => {
    navigate("/profile", { state: data });
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={data.profile.profilePictureURL}
          className="card-img-top"
          alt="Skyscrapers"
        />
        <div className="card-body">
          <h5 className="card-title">
            {data.profile.userId.firstname + " " + data.profile.userId.lastname}
          </h5>
          <p className="card-text">{data.profile.bio}</p>
        </div>
        <MDBCardBody>
          <MDBCardText className="mb-4">
            Match Status: {data.percentageMatch}
          </MDBCardText>
          <MDBProgress className="rounded">
            <MDBProgressBar
              width={data.percentageMatch}
              valuemin={0}
              valuemax={100}
            />
          </MDBProgress>
        </MDBCardBody>
        <div className="card_button_container">
          <button className="card-btn" onClick={openProfile}>
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
