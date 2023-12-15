import React, { useState } from "react";
import "./signup.css";
import { GoogleLogin } from '@react-oauth/google';
import PasswordChecklist from "react-password-checklist";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

export default function Signup() {
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  // const [error, setErrorMessage] = useState("");

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    }
    else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  function handleSetPassword(event) {
    setPassword(event.target.value);
  }
  function handleSetMatchPassword(event) {
    setMatchPassword(event.target.value);
  }

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
              type={type}
              value={password}
              onChange={handleSetPassword}
              // type="password"
              id="pwd"
              placeholder=""
              minlength="8"
              required
            />
            {/* <span className="eyeon" onClick={handleToggle}>
              <Icon class="absolute mr-10" icon={icon} size={25} />
            </span> */}
            <label htmlFor="password">Password</label>
          </div>
          <div className="message">
            <PasswordChecklist
              rules={["capital", "minLength", "lowercase", "number", "match"]}
              minLength={8}
              value={password}
              valueAgain={matchPassword}
              messages={{
                minLength: "At Least 8 characters",
                capital: "Must contain 1 uppercase",
                lowercase: "Must conatin 1 lowercase",
                number: "Must contain 1 number",
                match: "Match to each other"
              }}
            />
          </div>
          <div className="input_box cnf_pwd">
            <input
              value={matchPassword}
              onChange={handleSetMatchPassword}
              type="password"
              id="pwd"
              placeholder=""
              minlength="8"
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
