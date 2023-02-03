import React from "react";
import "./TopMatchCardGraph.css";

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

const TopMatchCardGraph = ({per}) => {
  return (
    <div>
      <MDBCard style={{ width: "740px" }}>
        <MDBCardBody>
          <MDBCardText className="mb-4">Match Status: {per}%</MDBCardText>
          <MDBProgress className="rounded" style={{ height: "7.5px" }}>
            <MDBProgressBar width={per} valuemin={0} valuemax={100} />
          </MDBProgress>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default TopMatchCardGraph;
