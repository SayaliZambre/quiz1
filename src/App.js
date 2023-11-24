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