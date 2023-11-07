import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Leaderboard from './components/leaderboard';
import Result from './components/result';
function App() {
  return (
    <Routes>
      <Route path='/Leaderboard' element={<Leaderboard/>}></Route>
      <Route path='/Result' element={<Result/>}></Route>
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}
export default App;
