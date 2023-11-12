import './App.css';
import {Routes,Route} from "react-router-dom";
import Leaderboard from './components/Leaderboard/Leaderboard';
import Result from './components/result';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Leaderboard />}></Route>
      <Route path='/Result' element={<Result />}></Route>
    </Routes>
  );
}
export default App;
