import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
  emailOTP: "",
};
const Register = (props) => {
  const [emailOTP, setEmailOTP] = useState(false);
  const [phoneOTP, setPhoneOTP] = useState(false);

  const handleEmailOTP = () => {
    setEmailOTP(!emailOTP);
  };

  const handlePhoneOTP = () => {
    setPhoneOTP(!phoneOTP);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();

        // axios.post('http://localhost:8080/api/v1/auth/signup', values )
        //   .then(res => console.log(res))
      },
    });

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
          <div className="form-group mt-2">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
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
              class="p-1 align-self-end btn btn-outline-success"
              onClick={handleEmailOTP}
              style={{ height: "34px", marginTop: "10px" }}
            >
              Get Email Otp
            </button>) : null }
          </div>

          {emailOTP ? (
            <div className="d-flex justify-content-between align-items-center form-group mt-2">
              <div>
                <label htmlFor="emailOTP">Enter Email Otp</label>
                <input
                  type="text"
                  id="emailOTP"
                  name="emailOTP"
                  autoComplete="off"
                  className="form-control mt-1"
                  placeholder="Otp"
                  value={values.emailOTP}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{" "}
              </div>

              <button
                type="button"
                class="p-1 align-self-end btn btn-outline-info"
                
                style={{ height: "34px", marginTop: "10px" }}
              >
                Verify Otp
              </button>
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
              class="p-1 align-self-end btn btn-outline-success"
              onClick={handlePhoneOTP}
              style={{ height: "34px", marginTop: "10px" }}
            >
              Get Phone Otp
            </button>) : null } 
          </div>

          {phoneOTP ? (
            <div className="d-flex justify-content-between align-items-center form-group mt-2">
              <div>
                <label htmlFor="phoneOTP">Enter Phone Otp</label>
                <input
                  type="text"
                  id="phoneOTP"
                  name="phoneOTP"
                  autoComplete="off"
                  className="form-control mt-1"
                  placeholder="Otp"
                  value={values.phoneOTP}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{" "}
              </div>

              <button
                type="button"
                class="p-1 align-self-end btn btn-outline-info"
               
                style={{ height: "34px", marginTop: "10px" }}
              >
                Verify Otp
              </button>
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
            <button type="submit" className="btn btn-primary" disabled>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
