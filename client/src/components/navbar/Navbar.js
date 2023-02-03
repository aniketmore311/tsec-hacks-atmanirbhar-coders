import React, { useEffect } from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { getPhotoUrl } from "../../utils";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsLogged(true);
    }
  }, []);

  return (
    <header className="p-3 text-white" style={{ backgroundColor: "#6351ce" }}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between ">
          <img
            onClick={() => {
              navigate("/");
            }}
            src="finallogo.png"
            className="logo"
          />
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            ></svg>
          </a>

          <div className="d-flex align-items-center justify-content-between text-end">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {/* <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li> */}
              {/* <li><a href="#" className="nav-link px-2 text-white">Features</a></li> */}
              {/* <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li> */}
              {isLogged && (
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/info");
                    }}
                    className="nav-link px-2 text-white"
                  >
                    Profile
                  </a>
                </li>
              )}

              <li>
                <a href="#" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Contact Us
                </a>
              </li>
            </ul>
            {isLogged && (
              <img
                style={{
                  width: "40px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                src={getPhotoUrl(
                  (() => {
                    const user = JSON.parse(localStorage.getItem("user"));
                    return user.firstname + " " + user.lastname;
                  })()
                )}
              ></img>
            )}

            {!isLogged ? (
              <button
                type="button"
                className="ml-2 btn btn-outline-light me-2"
                style={{ marginLeft: "1rem" }}
              >
                <a
                  href="/auth"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Login
                </a>
              </button>
            ) : (
              <button
                type="button"
                className="ml-2 btn btn-outline-light me-2"
                style={{ marginLeft: "1rem" }}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/logout");
                  }}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Logout
                </a>
              </button>
            )}
            {/* <button type="button" className="btn btn-warning">Sign-up</button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
