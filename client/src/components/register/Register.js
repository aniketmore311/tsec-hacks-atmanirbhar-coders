import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import axios from "axios";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  emailotp: "",
  phoneotp: "",
  password: "",
  confirm_password: "",
  emailOTP: "",
};
const Register = (props) => {
  const [emailOTP, setEmailOTP] = useState(false);
  const [phoneOTP, setPhoneOTP] = useState(false);
  const [ userId, setUserId ] = useState();
  const [isEmailVerified, setIsEmailverified] = useState(false)
  const [isPhoneVerified, setIsPhoneverified] = useState(false)


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        axios.post('http://localhost:8080/api/v1/auth/signup/add/password', { userId: userId, password: values.password} )
        .then(res => {
          console.log(res)
          action.resetForm();
        })
      
       
      },
    });

  const handleEmailOTP = () => {
    setEmailOTP(!emailOTP);
    
    axios.post('http://localhost:8080/api/v1/auth/signup/start', { firstname: values.firstName, lastname: values.lastName })
    .then(res => {
      const id = res.data.user.id;
      setUserId(id);

      axios.post('http://localhost:8080/api/v1/auth/signup/verify/email/sendOTP', { userId: id, email: values.email })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    })
    .catch(err => console.log(err));
  };

  const verifyEmailOTP = () => {
    axios.post('http://localhost:8080/api/v1/auth/signup/verify/email/verify', { userId: userId, otp: values.emailotp } )
    .then(res => {console.log(res)
    setIsEmailverified(true);
    })
    .catch(err => console.log(err))
  }

  const handlePhoneOTP = () => {
    setPhoneOTP(!phoneOTP);

    axios.post('http://localhost:8080/api/v1/auth/signup/verify/phonenumber/sendOTP', { userId: userId, phoneNumber: values.phone })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };

  const verifyPhoneOTP = () => {
    axios.post('http://localhost:8080/api/v1/auth/signup/verify/phonenumber/verify', { userId: userId, otp: values.phoneotp } )
    .then(res => {console.log(res)
    setIsPhoneverified(true)
    })
    .catch(err => console.log(err))
  }

  

  const { changeAuthMode } = props;
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title mb-0">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="d-flex justify-content-between form-group mt-2">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="off"
              className="form-control mt-1"
              placeholder="e.g Jane"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ width: '150px'}}
            />
            {errors.firstName && touched.firstName ? <p>{errors.firstName}</p> : null}
          </div>

          <div className="ml-1">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="off"
              className="form-control mt-1"
              placeholder="e.g Doe"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ width: '150px'}}
            />
            {errors.lastName && touched.lastName ? <p>{errors.lastName}</p> : null}
          </div>
          </div>
          <div className="d-flex justify-content-between align-items-center form-group mt-2">
            <div className="f">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                className="form-control mt-1"
                placeholder="Email Address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? <p>{errors.email}</p> : null}
            </div>
            { !emailOTP ? (<button
              type="button"
              className="p-1 align-self-end btn btn-outline-success"
              onClick={handleEmailOTP}
              style={{ height: "34px", marginTop: "10px" }}
            >
              Get Email Otp
            </button>) : null }
          </div>

          {emailOTP ? (
            <div className="d-flex justify-content-between align-items-center form-group mt-2">
              <div>
                <label htmlFor="emailotp">Enter Email Otp</label>
                <input
                  type="text"
                  id="emailotp"
                  name="emailotp"
                  autoComplete="off"
                  className="form-control mt-1"
                  placeholder="Otp"
                  value={values.emailotp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{" "}
              </div>

              { !isEmailVerified ? (<button
                type="button"
                className="p-1 align-self-end btn btn-outline-info"
                onClick={verifyEmailOTP}

                style={{ height: "34px", marginTop: "10px" }}
              >
                Verify Otp
              </button>) : (
                <button type="button" class="p-1 align-self-end btn btn-success" 
                style={{ height: "34px", marginTop: "10px" }}
                disabled>Email Verified</button>
              )}
            </div>
          ) : null}

          <div className="d-flex justify-content-between align-items-center form-group mt-2">
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                autoComplete="off"
                className="form-control mt-1"
                placeholder="Enter phone no"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
            </div>

             { !phoneOTP ? (<button
              type="button"
              className="p-1 align-self-end btn btn-outline-success"
              onClick={handlePhoneOTP}
              style={{ height: "34px", marginTop: "10px" }}
            >
              Get Phone Otp
            </button>) : null } 
          </div>

          {phoneOTP ? (
            <div className="d-flex justify-content-between align-items-center form-group mt-2">
              <div>
                <label htmlFor="phoneotp">Enter Phone Otp</label>
                <input
                  type="text"
                  id="phoneotp"
                  name="phoneotp"
                  autoComplete="off"
                  className="form-control mt-1"
                  placeholder="Otp"
                  value={values.phoneotp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{" "}
              </div>

             { !isPhoneVerified ? ( <button
                type="button"
                className="p-1 align-self-end btn btn-outline-info"
                onClick={verifyPhoneOTP}
                style={{ height: "34px", marginTop: "10px" }}
              >
                Verify Otp
              </button>) : (
                <button type="button" class="p-1 align-self-end btn btn-success" 
                 style={{ height: "34px", marginTop: "10px" }}
                 disabled>Phone Verified</button>
              )}
            </div>
          ) : null}

          <div className="form-group mt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              className="form-control mt-1"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          <div className="form-group mt-2">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              autoComplete="off"
              className="form-control mt-1"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p>{errors.confirm_password}</p>
            ) : null}
          </div>
          <div className="d-grid gap-2 mt-3">
            { (isEmailVerified && isPhoneVerified) ? (
              <button type="submit" className="btn btn-primary">
              Submit
            </button>) :(
              <>
              <p>Email or Phone Not verified</p>
              <button type="submit" className="btn btn-primary" disabled>
              Submit
            </button>
            </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
