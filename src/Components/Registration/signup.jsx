import React from "react";
import "./signup.css";
import { GoogleLogin } from '@react-oauth/google';

export default function Signup() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div>
      {/* <h1>This is the Signup page.</h1> */}
      <form action="" className="signup">
        <h1>SIGN UP</h1>
        <div className="input_box">
          <input type="text" id="username" placeholder="" required />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input_box">
          <input type="email" id="email" placeholder="" required />
          <label htmlFor="email">Email-ID</label>
        </div>
        <div className="phone-gender">
          <div className="input_box phone">
            <input
              type="tel"
              id="phone_number"
              placeholder=""
              maxLength={10}
              required
            />
            <label htmlFor="phone">Mobile Number</label>
          </div>
          <div className="gender">
            <select name="gender" id="gender" className="gnd" required>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="password">
          <div className="input_box pwd">
            <input
              type="password"
              id="pwd"
              placeholder=""
              minlength="8"
              maxLength="10"
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <p className="message">
            <ul>
              <li>At least 8 characters</li>
            </ul>
            <ul>
              <li>Must contain 1 lowercase</li>
            </ul>
            <ul>
              <li>Must contain 1 uppercase</li>
            </ul>
            <ul>
              <li>Must contain 1 symbol</li>
            </ul>
          </p>
          <div className="input_box cnf_pwd">
            <input
              type="password"
              id="pwd"
              placeholder=""
              minlength="8"
              maxLength="10"
              required
            />
            <label htmlFor="confirm password">Confirm Password</label>
          </div>
        </div>
        <button type="submit" className="botn">
          Create Account
        </button>
        <div className="register-link">
          <p>
            Already have an Account? <a href="login">Login</a> here
          </p>
        </div>
        <h3>OR</h3>
        <p className="google-sign-in-button">
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </p>
      </form>
    </div>
  );
}
