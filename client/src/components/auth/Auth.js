import React from 'react'
import { useState } from 'react'
import Login from '../login/Login'
import Register from '../register/Register'
import './auth.css'
const Auth = () => {

    let [authMode, setAuthMode] = useState("signin")
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
      }

    if (authMode === "signin") {
        return(
            <Login changeAuthMode={changeAuthMode}/>
        )
    }
    if (authMode === "signup") {
        return(
            <Register changeAuthMode={changeAuthMode}/>
        )
    }


}

export default Auth
