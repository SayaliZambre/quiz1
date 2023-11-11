import './App.css';
import { Routes, Route } from "react-router-dom";
import Profile from './Components/profilePage/profile';
import Homepage from './Components/homePage/homepage';

function App() {
  return (
    <Routes >
      <Route path='/' element={<Homepage />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default App;
