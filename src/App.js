import './App.css';
import {Routes,Route} from "react-router-dom";
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Result from './Components/result';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Leaderboard />}></Route>
      <Route path='/Result' element={<Result />}></Route>
    </Routes>
  );
}
export default App;
