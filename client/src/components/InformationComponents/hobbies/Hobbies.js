import React from 'react'
import { useState } from 'react'
import './hobbies.css'
const Hobbies = ( { nextId, prevId }) => {

    const [hobbies, setHobbies] = useState([])
    const [value, setValue] = useState('')

    const addItem = () => {

        setHobbies([...hobbies, value])
        setValue('')
    }

    const inputEnter = (e) => {
        if(e.keyCode === 13){
            addItem();
        }
    }

    const handleNext = () => {

        nextId();
    }

  return (
    <div className='hobbies__container'>
    <div className='hobbies__container_wrapper'>
        <div className='form-container'>
            <label for='hobbyName'>Hobby: </label>
            <input type='text' name='hobbyName' id='hobbyItem' value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={inputEnter}/>
            <button type='submit' onClick = {addItem} >Add</button>
        </div>

        <div className='listItems'>
            {hobbies.map((item, index) => {
                return (
                    <p>{index + 1}. {item}</p>
                )
            }
            )}
        </div>

        <div className='bio__container-btns'>
            <button type='button' onClick={prevId}>Prev</button>
            <button type='button' onClick={handleNext}>Next</button>
        </div>
        </div>
        </div>
  )
}

export default Hobbies
