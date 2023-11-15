import React from "react";
import "./signup.css";

export default function Signup() {
  return (
    <div>
      {/* <h1>This is the Signup page.</h1> */}
      <form action="" className="signup">
        <h1>SIGN UP</h1>
        <div className="input_box">
          <input type="text" id="name" placeholder="Name" required />
        </div>
        <div className="input_box">
          <input type="email" id="email" placeholder="Email ID" required />
        </div>
        <div className="gender-birth">
          <div className="gender">
            <fieldset>
              <legend>Gender</legend>
              <input type="radio" name="gender" id="male" value="M" />
              <label htmlFor="" className="male">
                Male
              </label>
              <input type="radio" name="gender" id="female" value="F" />
              <label htmlFor="" className="female">
                Female
              </label>
            </fieldset>
          </div>
          <div className="birth">
            <input type="date" id="birthday" />
          </div>
        </div>
        <div className="phone-class">
          <div className="phone">
            <input
              type="tel"
              id="phone_number"
              placeholder="Mobile Number"
              maxLength={10}
              required
            />
          </div>
          <div className="class">
            <select name="class" id="class" className="std" required>
              <option value="">Class</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </div>
        <div className="input_box">
          <input type="text" id="username" placeholder="Username" required />
        </div>
        <div className="password">
          <div className="input_box">
            <input
              type="password"
              id="pwd"
              placeholder="Password"
              minlength="8"
              maxLength="10"
              required
            />
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
          </div>
          <div className="input_box">
            <input
              type="password"
              id="pwd"
              placeholder="Confirm Password"
              minlength="8"
              maxLength="10"
              required
            />
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
        <button type="button" class="google-sign-in-button">
          Continue with Google
        </button>
      </form>
    </div>
  );
}
