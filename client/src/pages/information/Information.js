import React from 'react'
import SideMenu from '../../components/InformationComponents/sideMenu/SideMenu'
import Profile from '../../components/InformationComponents/profile/Profile'
import './information.css'
const Information = () => {
  return (
    <div className='information__container'>
      <SideMenu/>
      <Profile/>
    </div>
  )
}

export default Information
