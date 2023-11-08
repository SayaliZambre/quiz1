import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Leaderboard from './components/leaderboard';
import Result from './components/result';
function App() {
  return (
    <Routes>
      <Route path='/Leaderboard' element={<Leaderboard />}></Route>
      <Route path='/Result' element={<Result />}></Route>
    </Routes>
  );
}
export default App;
