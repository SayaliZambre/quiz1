import React from "react";
import "./login.css";

export default function Login() {
  return (
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
            <input type="password" placeholder="Password" required />
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
              Not a Member? <a href="b">Sign Up</a> here
            </p>
          </div>
          <h4>OR</h4>
          <button type="button" class="google-sign-in-button">
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}
