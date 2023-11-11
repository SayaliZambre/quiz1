import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Physics from './Physics';


const Que = () => {
  return (
    <div>
      <div className="Heading">
        <h2>Mock Test</h2>
          <Routes>
            <Route path='/Physics' Component={Physics}/>
          </Routes>
      </div>
         
   



    </div>
  )
}

export default Que