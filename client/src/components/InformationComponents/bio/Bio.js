import React, { useState } from 'react'
import './bio.css'

const Bio = ({ id, nextId, prevId }) => {

    const [ dob, setDob] = useState('')
    const [age, setAge ] = useState('')
    const [gender, setGender] = useState('')
    const [marStatus, setMarStatus] = useState('')
    const [about, setAbout] = useState('')
    const [ facebook, setFacebook ] = useState('');
    const [ instagram, setInstagram ] = useState('');
    const [ linkedin, setLinkedIn ] = useState('')
    //console.log(id)

    const handleNext = () => {
        console.log(dob, age, gender, marStatus, about )

        nextId();
    }
  return (
    <div className='bio__container'>
        <div className='bio__container_wrapper'>
        <h2>Bio</h2>
            <div className='bio__container-top'>
            <div className='bio__container-topleft'>
                <div className='form-container'>
                    <label>DOB: </label>
                    <input type='date' value={dob}  onChange={(e) => {setDob(e.target.value)}}></input>
                </div>

                <div className='form-container'>
                    <label>Age: </label>
                    <input type='text' value={age} onChange={(e) => {setAge(e.target.value)}}></input>
                </div>

                <div className='form-container'>
                    <label>Gender: </label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} name="gender" id="gender">
                        <option  value="Male">Male</option>
                        <option  value="Female">Female</option>
                        <option  value="Prefer not to say">Prefer not to say</option>
                        
                        </select>
                </div>

                <div className='form-container'>
                    <label>Marital Status: </label>
                    <select value={marStatus} onChange={(e) => setMarStatus(e.target.value)} name="marStatus" id="marStatus">
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                        
                        </select>
                </div>
            </div>

            <div className='bio__container-topright'>
            <div className='form-container'>
                    <label>Facebook: </label>
                    <input type='text' value={facebook}  onChange={(e) => {setFacebook(e.target.value)}}></input>
                </div>

                <div className='form-container'>
                    <label>Instagram: </label>
                    <input type='text' value={instagram}  onChange={(e) => {setInstagram(e.target.value)}}></input>
                </div>

                <div className='form-container'>
                    <label>LinkedIn: </label>
                    <input type='text' value={linkedin}  onChange={(e) => {setLinkedIn(e.target.value)}}></input>
                </div>

                
            </div>
            </div>

            

            <div className='bio__container-bottom'>
                <h4>About Yourself</h4>
                <textarea rows='5' cols='70' value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
            </div>

            <div className='bio__container-btns'>
            <button type='button' onClick={prevId}>Prev</button>
            <button type='button' onClick={handleNext}>Next</button>
        </div>
        </div>

        
      
    </div>
  )
}

export default Bio
