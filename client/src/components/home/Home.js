import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {

  const user = useSelector(state => state.name)
  return (
    <>
    <Navbar/>
    <Footer/>
    </>
  )
}

export default Home;
