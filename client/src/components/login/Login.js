import React from 'react'
import { useFormik } from 'formik'
import { signInSchema } from '../../schemas'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../redux/actions/user'
import { BrowserRouter as Redirect } from 'react-router-dom'


const initialValues = {
  email: '',
  password: ''
}
const Login = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    

    const { values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();

        axios.post('http://localhost:8080/api/v1/auth/login', values )
        .then(res => dispatch(login(res.data.data.user)))

        // navigate('/')

      }
      
    })
    const { changeAuthMode } = props
  return (
    <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label htmlFor='email'>Email address</label>
              <input
                type="email"
                id='email'
                name='email'
                autoComplete='off'
                className="form-control mt-1"
                placeholder="Enter email"
                value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              { errors.email && touched.email ? (
                <p>{errors.email}</p>
              ): null}
            </div>
            <div className="form-group mt-3">
              <label htmlFor='password'>Password</label>
              <input
                type="password"
                id='password'
                name='password'
                autoComplete='off'
                className="form-control mt-1"
                placeholder="Enter password"
                value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              { errors.password && touched.password ? (
                <p>{errors.password}</p>
              ): null}
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
  )
}

export default Login
