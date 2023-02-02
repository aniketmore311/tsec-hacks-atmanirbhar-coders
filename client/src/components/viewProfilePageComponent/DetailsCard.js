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

import ProfileInfo from "./ProfileInfo";
import { Data } from "./Data";

const DetailsCard = () => {
  const [userData, setUserData] = useState(Data);
  console.log(userData);
  return (
    <MDBCard className="mb-4">
      <MDBCardBody>
        {Object.entries(userData).map(([key, value]) => (
          <div>
            <ProfileInfo key={key} value={value} property={key} />
            <hr />
          </div>
        ))}
      </MDBCardBody>
    </MDBCard>
  );
};

export default DetailsCard;
