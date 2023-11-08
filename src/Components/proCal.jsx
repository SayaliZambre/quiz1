import React from 'react';
import "./proCal.css";
import Data from "./calData.json";
import { useState } from 'react';
import CalBox from './calBox';

export default function ProCal() {

  const [data, useData] = useState(Data.Data);

  return (
    <div className="pro_cal">
      {data.map(key => {
        return <CalBox val={key.val} />
      })}
    </div>
  )
}
