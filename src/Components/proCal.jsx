import React from 'react';
import "./proCal.css";
import Data from "./calData.json";
import { useState } from 'react';
import CalBox from './calBox';

export default function ProCal() {

  const [data, useData] = useState(Data.Data);

  return (
    <div className="pro_cal">
      <div className="days_name">
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thr</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>
      <div className="proCal_box">
        {data.map(key => {
          return <CalBox val={key.val} />
        })}
      </div>
    </div>
  )
}
