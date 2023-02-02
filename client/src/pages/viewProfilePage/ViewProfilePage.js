import React from "react";
import DetailsCard from "../../components/viewProfilePageComponent/DetailsCard";
import ImageCard from "../../components/viewProfilePageComponent/ImageCard";
import SocialMediaCard from "../../components/viewProfilePageComponent/SocialMediaCard";
import TopMatchCard from "../../components/viewProfilePageComponent/TopMatchCard";
import TopMatchCardGraph from "../../components/viewProfilePageComponent/TopMatchCardGraph";

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

const ViewProfilePage = () => {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <ImageCard />
            <SocialMediaCard />
          </MDBCol>
          <MDBCol lg="8">
            <DetailsCard />
            <MDBRow>
              <MDBCol md="6">
                <TopMatchCardGraph />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ViewProfilePage;
