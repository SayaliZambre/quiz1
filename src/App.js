import './App.css';
import { Routes, Route } from "react-router-dom";
import ScheduledPage from './component/Schedulepage.jsx'; 
import './component/quiz.css';
// import React from 'react';

const App = () => {
    return (
        <div>
            
            <Routes> 
                <Route path='/' element={<ScheduledPage />} />
            </Routes>
        </div>
    );
};

export default App;
import {Routes,Route} from "react-router-dom";
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Result from './Components/result';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Leaderboard />}></Route>
      <Route path='/Result' element={<Result />}></Route>
    </Routes>
import { Routes, Route } from "react-router-dom";

import Login from './Components/Registration/login';
import Signup from './Components/Registration/signup';
import Profile from './Components/profilePage/profile';
import Homepage from './Components/homePage/homepage';

function App() {
  return (
    <><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
    </Routes>
</>
  );
}
export default App;
