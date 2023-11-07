import React from 'react'
import { useState } from 'react'

export default function CalBox(props) {

    const [value, usevalue] = useState(props.val);
    
    const bg = {
        backgroundColor : value ? "green" : "gray",
        width: "50px",
        height: "50px"
    }

  return (
    <div className="cal_box" style={bg}>
    </div>
  )
}
