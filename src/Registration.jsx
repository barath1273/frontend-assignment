import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import Dashboard from './Dashboard'
import { Navigate, Route } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  dateOfBirth: "",
  phoneNumber: "",
  gender: ""
};

const Registration = ({setLog}) => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const { values, errors, touched, handleBlur, handleChange} = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log("🚀 ~ Registration ~ values", values);
      setRegistrationSuccess(true);
     
      action.resetForm();
    }
  });

  // const handleAlertClick = () => {
  //   setRegistrationSuccess(false);

  // };

  const handleSubmit=()=>{
setLog(true);
{/* <Navigate to={<dashboard/>}/> */}
  }
return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name<span> *</span>
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required // Make the name field required
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email<span> *</span>
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required // Make the email field required
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password<span> *</span>
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required // Make the password field required
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password<span> *</span>
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required // Make the confirm password field required
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  {/* New fields */}
                  <div className="input-block">
                    <label htmlFor="dateOfBirth" className="input-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      autoComplete="off"
                      name="dateOfBirth"
                      id="dateOfBirth"
                      value={values.dateOfBirth}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.dateOfBirth && touched.dateOfBirth ? (
                      <p className="form-error">{errors.dateOfBirth}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="phoneNumber" className="input-label">
                      Phone Number<span> *</span>
                    </label>
                    <input
                      type="tel"
                      autoComplete="off"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required // Make the phone number field required
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <p className="form-error">{errors.phoneNumber}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="gender" className="input-label">
                      Gender
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && touched.gender ? (
                      <p className="form-error">{errors.gender}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                    <a href="#" className="">
                      Want to register using Gmail?
                    </a>
                    <button
                      className={`input-button ${Object.values(touched).every(Boolean) && Object.keys(errors).length === 0 ? "hover" : ""}`}
                      type="submit"
                      disabled={!Object.values(touched).every(Boolean) || Object.keys(errors).length > 0}
                      onClick={handleSubmit}>Registration</button>
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <a href="#">Sign In now</a>
                </p>
              </div>
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      {registrationSuccess && (
        <AlertWrapper>
          <div className="alert">
            <p>Registration successful!</p>
          </div>
        </AlertWrapper>
      )}
    </>
  );
};

// Styles for the alert
const AlertWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  .alert {
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    border-radius: 5px;
  }

  .alert a {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }
  
`;
const Wrapper = styled.section`
  /* Your CSS styling */
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-button:hover,
.input-button.hover {
  background: #55311c;
}


  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default Registration;
