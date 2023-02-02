import React from "react";
import { useState } from "react";
import axios from "axios";
import './profession.css'
const Profession = ({ nextId, prevId, profileData, setProfile }) => {

  const [institution, setInstitution ] = useState(profileData.institute)
  const [ fos, setFos ] = useState(profileData.field)
  const [company, setCompany ] = useState(profileData.company)
  const [ role, setRole ] = useState(profileData.role);


  const handleNext = () => {
    
    axios.patch('http://localhost:8080/api/v1/user/profile', {institute: institution, 
    field: fos,
    company: company,
    role: role
},{
        headers:{
          Authorization: "Bearer "+localStorage.getItem("access_token")
        }
      }).then(res => { setProfile(res.data)
        nextId();
    })
      .catch(err => console.log(err))
    
  }
  return (
    <div className="profession__container">
      <div className="profession__container_wrapper">
        <div className="student">
          <h3>Student</h3>
          <div className="form-container">
            <label>Institution: </label>
            <input type='text' value={institution} onChange={(e) => setInstitution(e.target.value)}></input>
          </div>

          <div className="form-container">
            <label>Field of Study: </label>
            <input type='text' value={fos} onChange={(e) => setFos(e.target.value)}></input>
          </div>
        </div>

        <div className="profession">
        <h3>Profession</h3>
          <div className="form-container">
            <label>Company: </label>
            <input type='text' value={company} onChange={(e) => setCompany(e.target.value)}></input>
          </div>
          <div className="form-container">
            <label>Role: </label>
            <input type='text' value={role} onChange={(e) => setRole(e.target.value)}></input>
          </div>
        </div>

        <div className='profession__container-btns'>
            <button type='button' onClick={prevId}>Prev</button>
            <button type='button' onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Profession;
