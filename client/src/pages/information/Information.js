import React, { useState } from 'react'
import SideMenu from '../../components/InformationComponents/sideMenu/SideMenu'
import Profile from '../../components/InformationComponents/profile/Profile'
import Bio from '../../components/InformationComponents/bio/Bio'
import Profession from '../../components/InformationComponents/profession/Profession'
import Preference from '../../components/InformationComponents/preference/Preference'
import './information.css'
import Hobbies from '../../components/InformationComponents/hobbies/Hobbies'


const Information = () => {
    const [ id, setId ] = useState(1);

    //console.log(id)
    const nextId = () => {
      setId((prev)=>{
        console.log(prev)
        if(prev === 5){
          return 1;
        }else{
          return prev+1;
        }
      })
      /*
      console.log(id)
      if(id === 5){
        setId(1);
      }else{
        setId(id + 1);
      }
      */
    }

    const prevId = () => {
      setId((id)=>{
        return id-1;
      });
    }

  return (
    <div className='information__container'>
      <SideMenu/>


      
      { 
        (()=>{
          if(id === 1){
            return <Profile nextId={nextId}/>
          }else if(id === 2){
            return <Bio nextId={nextId} prevId={prevId}/>
          }else if(id === 3){
            return <Profession nextId={nextId} prevId={prevId}/>
          }else if(id === 4){
            return <Preference nextId={nextId} prevId={prevId}/>
          }else if(id === 5){
            return <Hobbies nextId={nextId} prevId={prevId}/>
          }
        })()
      }
      {/* <Bio/> */}
    </div>
  )
}

export default Information
