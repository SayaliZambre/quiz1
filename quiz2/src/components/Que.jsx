import React from "react";
import "./Style.css";

const Que = () => {
  return (
    <div className="Main" >
      <div className="Heading">
        <h1>Mock Test</h1>
        <div className="Subject">
          <button className="Phy">Physics</button>
          <button className="Chem">Chemistry</button>
          <button className="Math">Mathematics</button>
        </div>
      </div>
      <div className="Q">
      <h2>Quetion No. 1</h2>
      </div>
       <div className="Que">
          <h3>The power factor of R-L circuit is 1/(sqrt(3)) If the inductive reactance is 2, The value of resistance is ?</h3>
          <input type="radio" value="Option1" name="Options" /> Option 1
          <input type="radio" value="Option2" name="Options" /> Option 2
          <input type="radio" value="Option3" name="Options" /> Option 3
          <input type="radio" value="Option4" name="Options" /> Option 4
       </div>
         <div className="buttons">
          <button className="b1">Previous</button>
          <button className="b1">Next</button>
          <button className="b1">Submit</button>

         </div>
    </div>
  );
};

export default Que;
