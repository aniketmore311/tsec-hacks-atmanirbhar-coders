import React from "react";

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

const ProfileInfo = ({ property, value }) => {
  return (
    <MDBRow>
      <MDBCol sm="3">
        <MDBCardText>{property}</MDBCardText>
      </MDBCol>
      <MDBCol sm="9">
        <MDBCardText className="text-muted">{value}</MDBCardText>
      </MDBCol>
    </MDBRow>
  );
};

export default ProfileInfo;
