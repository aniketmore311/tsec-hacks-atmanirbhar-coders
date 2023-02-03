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
import { getPhotoUrl } from "../../utils";
import { DataArray } from "@mui/icons-material";

const ImageCard = ({ data }) => {
  const [isVerified, setIsVerified] = useState(false);
  return (
    <div>
      <MDBCard className="mb-4">
        <MDBCardBody className="text-center">
          <MDBCardImage
            src={getPhotoUrl(
              data.userId.firstname + " " + data.userId.lastname
            )}
            alt="avatar"
            className="rounded-circle"
            style={{ width: "150px" }}
            fluid
          />
          <p className="text-muted mb-1">
            {data.userId.firstname}{" "}
            <span>
              {data.userId.isKYCDone && (
                <GoVerified style={{ color: "blue" }} />
              )}
            </span>
          </p>
          <p className="text-muted mb-4">
            {data.city},{data.state}
          </p>
          <div className="d-flex justify-content-center mb-2">
            <MDBBtn>Message</MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default ImageCard;
