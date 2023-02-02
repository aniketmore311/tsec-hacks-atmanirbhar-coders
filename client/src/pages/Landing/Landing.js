import { display } from "@mui/system";
import React from "react";
import Footer from "../../components/footer/Footer";
import HeroContainer from "../../components/LandingPage/HeroContainer";
import Navbar from "../../components/navbar/Navbar";
import logo from "./logo.png";
import { CgProfile } from "react-icons/cg";
import { RiDashboardFill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { blue } from "@mui/material/colors";

const Landing = () => {
    return (
        <>
            <Navbar />
            <div
                style={{
                    backgroundColor: "#FAF5FF",
                    width: "100vw",
                    height: "80vh",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    {/* left section */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            height: "100%",
                            maxWidth: "35vw",
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: "Merriweather",
                                fontWeight: "bolder",
                                fontSize: "4rem",
                                marginBottom: "3rem",
                                color: "#2A4365",
                            }}
                        >
                            Find Your Perfect Roommate Today!
                        </h1>
                        <p
                            style={{
                                fontFamily: "Merriweather",
                                fontWeight: "normal",
                                fontSize: "25px",
                                marginBottom: "2rem",
                                color: "#4A5568",
                            }}
                        >
                            Say Goodbye to Lonely Nights and Hello to
                            Comfortable Living
                        </p>
                        <button
                            style={{
                                fontFamily: "Merriweather",
                                fontWeight: "bold",
                                padding: "1rem 2rem",
                                borderRadius: "1rem",
                                fontSize: "20px",
                                color: "white",
                                backgroundColor: "#805AD5",
                            }}
                        >
                            Find Partner
                        </button>
                    </div>
                    {/* right section */}
                    <div style={{}}>
                        <img
                            src="/logo.png"
                            style={{
                                height: "40rem",
                                width: "40rem",
                            }}
                        />
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: "#FAF5FF",
                    width: "100vw",
                    height: "60vh",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            height: "20rem",
                            width: "25rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            padding: "10px",
                        }}
                    >
                        <RiDashboardFill
                            style={{
                                height: "4rem",
                                width: "4rem",
                                color: "white",
                                backgroundColor: "#805AD5",
                                borderRadius: "1rem",
                                marginBottom: "2rem",
                            }}
                        />
                        <h1
                            style={{
                                fontFamily: "Merriweather",
                                fontWeight: "bold",
                                marginBottom: "1rem",
                            }}
                        >
                            Classy Dashboard
                        </h1>
                        <p
                            style={{
                                fontFamily: "Merriweather",
                            }}
                        >
                            Paragraph of text beneath the heading to explain the
                            heading. We'll add onto it with another sentence and
                            probably just keep going until we run out of words.
                        </p>
                    </div>
                    <div
                        style={{
                            height: "20rem",
                            width: "25rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            padding: "10px",
                        }}
                    >
                        <CgProfile
                            style={{
                                height: "4rem",
                                width: "4rem",
                                color: "white",
                                backgroundColor: "#805AD5",
                                borderRadius: "0.5rem",
                                marginBottom: "2rem",
                            }}
                        />
                        <h1
                            style={{
                                fontFamily: "Merriweather",
                                fontWeight: "bold",
                                marginBottom: "1rem",
                            }}
                        >
                            Matching Profiles
                        </h1>
                        <p
                            style={{
                                fontFamily: "Merriweather",
                            }}
                        >
                            Paragraph of text beneath the heading to explain the
                            heading. We'll add onto it with another sentence and
                            probably just keep going until we run out of words.
                        </p>
                    </div>
                    <div
                        style={{
                            height: "20rem",
                            width: "25rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            padding: "10px",
                        }}
                    >
                        <IoIosSearch
                            style={{
                                height: "4rem",
                                width: "4rem",
                                color: "white",
                                backgroundColor: "#805AD5",
                                borderRadius: "1rem",
                                marginBottom: "2rem",
                            }}
                        />
                        <h1
                            style={{
                                fontFamily: "Merriweather",
                                fontWeight: "bold",
                                marginBottom: "1rem",
                            }}
                        >
                            Smooth Searching
                        </h1>
                        <p
                            style={{
                                fontFamily: "Merriweather",
                            }}
                        >
                            Paragraph of text beneath the heading to explain the
                            heading. We'll add onto it with another sentence and
                            probably just keep going until we run out of words.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Landing;
