import './App.css';
import { Routes, Route } from "react-router-dom";
import Profile from './Components/profile';
import Homepage from './Components/homepage';

function App() {
  return (
    <Routes >
      <Route path='/' element={<Homepage />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default App;
