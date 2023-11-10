import React from 'react'
import { useState } from 'react'

export default function CalBox(props) {

    const [value, usevalue] = useState(props.val);
    
    const bg = {
        backgroundColor : value ? "green" : "gray",
        width: "25px",
        height: "25px"
    }

  return (
    <div className="cal_box" style={bg}>
    </div>
  )
}
