import React from 'react';
import "./proLeft.css";

export default function ProLeft() {
  return (
    <div className="pro_left">
      <div className="pro_head">
        <h1>Edit Profile</h1>
      </div>
      <form action="#" className='pro_form'>
        <label>Username <input type="text" name="username" id="username" /></label>
        <label>Email <input type="email" name="email" id="email" /></label>
        <label>Phone no. <input type="number" max={9999999999} min={1000000000} name="phone_no" id="phone_no" /></label>
        <label>Class <input type="text" name="class" id="class" /></label>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
