import React from 'react';
import "./Logingpage.css"
import Back from 'E:/e20-co225-Denture-Design-Studio/FrontEnd-DenturedesignStudio/src/backbutton/Back.jsx';
import { useNavigate } from 'react-router-dom';
function Loginpage() {
  let navigale =useNavigate();
function clickhandle(path) {
  navigale(path);
}
  return (
    <div className="logingpage">
      <div className="back"><Back  onclick={()=>clickhandle("/")}></Back></div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Salsa&display=swap" />
      <div className='contentbox'>
        
        <h2 className='header'>Log in to your account</h2>
        <div className="userinput" id='input1'>
          <h3 className='inputs'>Username:</h3>
          <input type="text" />
        </div>
        <div className="userinput" id='input2'>
          <h3 className='inputs'>Password:</h3>
          <input type="password" />
          <p id ='forget'><link rel="#" href="" />Forgot Password?</p>
        </div>
        <div>
          <button className="login2" onClick={()=>clickhandle("/")}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
