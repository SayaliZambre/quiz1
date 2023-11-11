import React from 'react';
import "./proLeft.css";
import userData from "./profileData.json";
import { useState } from 'react';

export default function ProLeft() {

  const [data, setdata] = useState(userData);

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phoneNo, setphoneNo] = useState(data.phoneNo);
  const [uclass, setUclass] = useState(data.class);

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePhoneNo = (event) => {
    setphoneNo(event.target.value);
  }

  const handleClass = (event) => {
    setUclass(event.target.value);
  }

  return (
    <div className="pro_left">
      <div className="pro_head">
        <h1>Edit Profile</h1>
      </div>
      <form action="#" className='pro_form'>
        <label>Username <input type="text" name="username" id="username" value={name} onChange={handleName}/></label>
        <label>Email <input type="email" name="email" id="email" value={email} onChange={handleEmail}/></label>
        <label>Phone no. <input type="number" max={9999999999} min={1000000000} name="phone_no" id="phone_no" value={phoneNo} onChange={handlePhoneNo}/></label>
        <label>Class <input type="text" name="class" id="class" value={uclass} onChange={handleClass}/></label>
        <div className="but_div">
        <button type="submit">Save</button>
        <button type='cancel'>Cancel</button>
        </div>
      </form>
    </div>
  )
}
