import React from 'react'
import { useState } from 'react'

export default function CalBox(props) {

    const [value, usevalue] = useState(props.val);
    
    const bg = {
        backgroundColor : value > 0.4 ? value === 1 ? "rgb(56, 237, 56)" : "green" : "rgb(213, 211, 211)",
        width: "25px",
        height: "25px"
    }

  return (
    <div className="cal_box" style={bg}>
    </div>
  )
}
