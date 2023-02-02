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

const SocialMediaLink = ({link,icon,name}) => {
    console.log(icon);
  return (
    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
      <MDBIcon fab icon={icon} style={{color:'blue'}}/>
      <MDBCardText>{name}</MDBCardText>
    </MDBListGroupItem>
  );
};

export default SocialMediaLink;
