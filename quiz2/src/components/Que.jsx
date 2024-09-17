import React, { useState, useEffect } from "react";
import "./Style.css";

const Que = () => {
  return (
    <div className="Main">
      <div className="Heading">
        <h2>Logo</h2>
      </div>
      <div className="sub-heading">
        <h3>Online Test PCB</h3>
      </div>
      <div className="lower">
        <div className="index-block">
          <div className="sub-index-blocl">
            <h3>[1]Physics</h3>
            <div className="indexes">
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
            </div>
          </div>

          <div className="sub-index-blocl">
            <h3>[2]Chemistry</h3>
            <div className="indexes">
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
            </div>
          </div>

          <div className="sub-index-blocl">
            <h3>[3]Mathematics</h3>
            <div className="indexes">
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>
              </div>
              <div className="s-div">d
                <a href="#">1</a>
              </div>
              <div className="s-div">
                <a href="#">1</a>A
              </div>
            </div>
          </div>
        </div>

        <div className="quetion-block">
          <h4>Physics - Quetion 04</h4>
          <p>
            The power factor of R-L circuit is 1/(sqrt(3)) If the inductive
            reactance is 2. The value of resistance is ?
          </p>

          <div className="option">
            <label>
              <div className="value">
                <input type="radio" autoComplete="off" name="q_opt"></input>
                <p>option1</p>
              </div>
              <div className="value">
                <input type="radio" autoComplete="off" name="q_opt"></input>
                <p>option2</p>
              </div>
              <div className="value">
                <input type="radio" autoComplete="off" name="q_opt"></input>
                <p>option3</p>
              </div>
              <div className="value">
                <input type="radio" autoComplete="off" name="q_opt"></input>
                <p>option4</p>
              </div>
            </label>
            <div className="buttons">
              <button title="Previus" className="prev">
                Previous
              </button>
              <button title="Submit" className="sub">
                Submit
              </button>
              <button title="Next" className="Next">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Que;
