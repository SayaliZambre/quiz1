import React from 'react';
import "./navbar.css";

export default function Navbar() {
  return (
    <div className='navbar'>
        <div>
          <h3>QuizApp</h3>
        </div>
        <div className='navbarRight'>
          <ul>
            <li><a href='#'>Test</a></li>
            <li><a href='#'>Notifications</a></li>
            <li><a href='/profile'>Profile</a></li>
          </ul>
          <ul>
            <li><button>Login</button></li>
            <li><button>Register</button></li>
          </ul>
        </div>
    </div>
  )
}
