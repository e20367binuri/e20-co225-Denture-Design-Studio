import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './first-page/Homepage';
import Loginpage from './logingpage/Logingpage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login1' element={<Loginpage />} />
      </Routes>
    </Router>
  );
}

export default App;
