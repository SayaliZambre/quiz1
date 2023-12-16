import React from 'react';
import "./proPic.css";
import pic from "./pic.webp";

export default function ProPic() {
  return (
    <div className="pro_pic">
      <img src={pic} />
      <h3>RANK: <span>1</span></h3>
    </div>
  )
}
