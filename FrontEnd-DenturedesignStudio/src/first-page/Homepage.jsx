import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './Homepage.css';

function Homepage() {
  let navigate = useNavigate();

  function handleClick(path) {
    navigate(path);
  }

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Salsa&display=swap" />
      <div className="Homepage">
        <div className="logo">
          <img src={logo} className='logo' alt="logo" />
        </div>
        <div>
          <h2 className='welcome'>Welcome To ,</h2>
          <h1 className='appname'>Denture Design Studio</h1>
        </div>
        <div>
          <button className='login' onClick={()=>handleClick('/login')}>Login</button>
          <button className='signup'onClick={()=>handleClick('/signup')}>Signup</button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
