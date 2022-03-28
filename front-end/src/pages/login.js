import React from 'react'
import './Login.css';

function Login() {
  return (
    <div id="background">
        <div id="LoginBox">
          <h1 id="Logoline">Logo Here</h1>
            <div id="Loginheader">
                <h3>Login</h3>
                <h4>Enter your info</h4>
            </div>
                <input id="Userinputs" type="text" placeholder="Enter Your Email"/>
                <input id="Userinputs" type="text" placeholder="Enter Your Password"/>
            <button id="SubmitButton" type="button">Submit</button>
        </div>
        
    
    </div>
  )
}

export default Login