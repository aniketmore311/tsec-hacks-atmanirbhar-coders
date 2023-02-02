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

import SocialMediaLink from "./SocialMediaLink";
import {LinkData} from "./Data";

const SocialMediaCard = () => {
  const [linkData, setLinkData] = useState(LinkData);
  console.log(linkData);
  const icon = {
    linkedin: "linkedin fa-lg",
    instagram: "instagram fa-lg",
    facebook: "facebook fa-lg",
  };
  return (
    <div>
      <MDBCard className="mb-4 mb-lg-0">
        <MDBCardBody className="p-0">
          <MDBListGroup flush className="rounded-3">
            {Object.entries(linkData).map(([key, value]) => (
              <div>
                <SocialMediaLink link={value} name={key} icon={icon[key]} />
              </div>
            ))}
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default SocialMediaCard;
