import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {

  const user = useSelector(state => state.name)
  return (
    <>
    <h1>Hello { user }</h1>
    <Navbar/>
    <Footer/>
    </>
  )
}

export default Home;
