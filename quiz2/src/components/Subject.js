import React from "react";
import Physics from "./Physics";
import Chemistry from "./Chemistry";
import Math from "./Math";
import ReactDOM from 'react-dom/client';
import { Routes ,Route } from 'react-router-dom';
import './Que.css';

const Que = () => {
  return (
    
    
    <div className="Main-box">
     
      <div className="Child-phy">
        <Routes>
          <Route path="/" Component={Physics}/>
        </Routes>
       
      </div>
      <div className="Child-chem">
        <Chemistry />
      </div>
      <div className="Child-mat">
        <Math />
     
      </div>
      
     
    </div>
    
  );
};

export default Que;
