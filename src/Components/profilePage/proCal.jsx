import React from 'react';
import "./proCal.css";
import Data from "./calData.json";
import { useState } from 'react';
import CalBox from './calBox';

export default function ProCal() {

  const [data, setData] = useState(Data.Data);

  return (
    <div className="pro_cal">
      <div className="proCal_box">
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thr</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
        {data.map(key => {
          return <CalBox val={key.val} />
        })}
      </div>
    </div>
  )
}
