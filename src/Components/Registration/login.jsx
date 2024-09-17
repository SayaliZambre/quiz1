import React from "react";
import "./login.css";
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <>
      <div>
        {/* <h1>This is Login Page.</h1> */}
        <div className="login">
          <form action="">
            <h1>LOGIN</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i class="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" minLength={8} required />
              <i class="bx bxs-lock"></i>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="c">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="register-link">
              <p>
                Not a Member? <a href="signup">Sign Up</a> here
              </p>
            </div>
            <h4>OR</h4>
            <p className="google-login-in-button">
              <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
            </p>
          </form>
        </div>
      </div></>
  );
}