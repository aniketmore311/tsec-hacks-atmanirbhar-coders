import React, { useState } from "react";
import "./RightFlatMates.css";

const RightFlatMates = () => {
    const [filter, setFilter] = useState({});
    const handleOptionChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value);
        setFilter({ ...filter, [name]: value });
        console.log(filter);
    };

    return (
        <div className="right_container">
            <div
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "10px",
                }}
            >
                <h1 style={{ fontSize: "21px",textAlign:"center", paddingBottom:"8px" }}>Matchings</h1>
                <label htmlFor="gender" className="LabelColor">
                    Gender
                </label>
                <select
                    value={filter.name}
                    name="gender"
                    onChange={handleOptionChange}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <hr></hr>
                <label htmlFor="smoking" className="LabelColor">
                    Smoking Status
                </label>
                <select
                    value={filter.name}
                    name="smoking"
                    onChange={handleOptionChange}
                >
                    <option value="Smoking">Smoking</option>
                    <option value="Not Smoking">Not Smoking</option>
                </select>
                <hr></hr>
                <label htmlFor="maratialstatus" className="LabelColor">
                    Maratial Status
                </label>
                <select
                    value={filter.name}
                    name="maratialstatus"
                    onChange={handleOptionChange}
                >
                    <option value="Single">Single </option>
                    <option value="Married">Married</option>
                </select>
                <hr></hr>
                <label htmlFor="category" className="LabelColor">
                    Profession
                </label>
                <select
                    value={filter.name}
                    name="category"
                    onChange={handleOptionChange}
                >
                    <option value="Student">Student </option>
                    <option value="Profession">Working Professional</option>
                </select>
            </div>
        </div>
    );
};

export default RightFlatMates;
