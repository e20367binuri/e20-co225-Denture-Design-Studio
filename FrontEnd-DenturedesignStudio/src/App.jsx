import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './first-page/Homepage';
import Loginpage from './logingpage/Logingpage';
import Signup from './Signinpage/signup';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Loginpage />} />
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
