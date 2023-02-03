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
import { getPhotoUrl } from "../../utils";

const CardComponent = ({ data }) => {
  const navigate = useNavigate();

  const openProfile = () => {
    navigate("/profile", { state: data });
  };

  return (
    <div className="col">
      <div
        className="card h-100 pt-4 pb-4 container-shadow"
        style={{
          borderRadius: "12px",
          boxShadow: "0px 4px 10px 0px rgba(255,255,255,0.75)",
        }}
      >
        <img
          src={getPhotoUrl(
            data.profile.userId.firstname + " " + data.profile.userId.lastname
          )}
          className="card-img-top"
          style={{
            maxWidth: "50%",
            alignSelf: "center",
          }}
          alt="Skyscrapers"
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              textAlign: "center",
            }}
          >
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
        <div
          className="card_button_container"
          style={{
            alignSelf: "center",
          }}
        >
          <button className="card-btn" onClick={openProfile}>
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
