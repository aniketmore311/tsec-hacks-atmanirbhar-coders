import React, { useState } from "react";
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
import { GoVerified } from "react-icons/go";

const ImageCard = () => {
  const [isVerified, setIsVerified] = useState(false);
  return (
    <div>
      <MDBCard className="mb-4">
        <MDBCardBody className="text-center">
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-circle"
            style={{ width: "150px" }}
            fluid
          />
          <p className="text-muted mb-1">
            Chinmay{" "}
            <span>
              {isVerified && <GoVerified style={{ color: "blue" }} />}
            </span>
          </p>
          <p className="text-muted mb-4">Mumbai,Maharahtra</p>
          <div className="d-flex justify-content-center mb-2">
            <MDBBtn>Message</MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default ImageCard;
