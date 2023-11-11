import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Registration/login';
import Signup from './Components/Registration/signup';

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
        <Route path='/' element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
    </Routes></>
  );
}

export default App;
