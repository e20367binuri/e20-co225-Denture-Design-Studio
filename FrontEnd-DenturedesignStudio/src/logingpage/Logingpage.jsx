import React from 'react';


function Loginpage() {
  return (
    <div className="logingpage">
      <div>
        <h2>Log in to your account</h2>
        <div className="userinput">
          <h3>Username:</h3>
          <input type="text" />
        </div>
        <div className="userinput">
          <h3>Password:</h3>
          <input type="password" />
          <p><a href="#">Forgot Password?</a></p>
        </div>
        <div>
          <button className="login2">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
