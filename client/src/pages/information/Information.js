import React, { useEffect, useState } from 'react'
import SideMenu from '../../components/InformationComponents/sideMenu/SideMenu'
import Profile from '../../components/InformationComponents/profile/Profile'
import Bio from '../../components/InformationComponents/bio/Bio'
import Profession from '../../components/InformationComponents/profession/Profession'
import Preference from '../../components/InformationComponents/preference/Preference'
import './information.css'
import Hobbies from '../../components/InformationComponents/hobbies/Hobbies'
import axios from 'axios'



const Information = () => {
    const [ id, setId ] = useState(1);
    console.log(id)
    const [profile, setProfile] = useState({
      userId: {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: ''
      }
    });

    useEffect(() => {
      axios.get('http://localhost:8080/api/v1/user/profile',{
        headers:{
          Authorization: "Bearer "+localStorage.getItem("access_token")
        }
      })
      .then(res => {

        setProfile(res.data);
      })
      .catch(err => console.log(err));
    }, [])
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
      <SideMenu activeId={id} setId={setId}/>


      
      { 
        (()=>{
          if(id === 1){
            return <Profile nextId={nextId} profileData={profile} setProfile={setProfile}/>
          }else if(id === 2){
            return <Bio nextId={nextId} prevId={prevId} profileData={profile} setProfile={setProfile}/>
          }else if(id === 3){
            return <Profession nextId={nextId} prevId={prevId} profileData={profile} setProfile={setProfile}/>
          }else if(id === 4){
            return <Preference nextId={nextId} prevId={prevId} profileData={profile} setProfile={setProfile}/>
          }else if(id === 5){
            return <Hobbies nextId={nextId} prevId={prevId} profileData={profile} setProfile={setProfile}/>
          }
        })()
      }
      {/* <Bio/> */}
    </div>
  )
}

export default Information
