import React, { useEffect } from 'react'
import { useState } from 'react'
import Login from '../login/Login'
import Register from '../register/Register'
import './auth.css'
const Auth = () => {

    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        if(localStorage.getItem("access_token")){
            setIsLogged(true)
        }
    }, [])

    let [authMode, setAuthMode] = useState("signin")
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
      }



   if ( !isLogged && authMode === "signin") {
        return(
            <Login changeAuthMode={changeAuthMode}/>
        )
    }
    else if (!isLogged && authMode === "signup") {
        return(
            <Register changeAuthMode={changeAuthMode}/>
        )
    } else{
        return(
            <h4 style={{ color: 'white'}}>Logged In</h4>
        )
    }


}

export default Auth
