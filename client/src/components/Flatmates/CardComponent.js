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

const CardComponent = ({ data }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={data.image} className="card-img-top" alt="Skyscrapers" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
        </div>
        <MDBCardBody>
          <MDBCardText className="mb-4">Match Status: 70%</MDBCardText>
          <MDBProgress className="rounded">
            <MDBProgressBar width={50} valuemin={0} valuemax={100} />
          </MDBProgress>
        </MDBCardBody>
        <div className="card_button_container">
          <button className="card-btn">View Profile</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
