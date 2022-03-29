import React from 'react'
import './Login.css';

function Login() {
  return (
    <div id="background">
        <div id="LoginBox">
            <img id='logo' src='https://i.ibb.co/KrDfhMc/2-0-500-250-px-250-250-px.png'/>
            <div id="Loginheader">
                <h3>Log in</h3>
                <p>Continue to Shopify 2.0</p>
            </div>
                <input id="Userinputs" type="text" placeholder="Enter Your Email"/>
                <input id="Userinputs" type="text" placeholder="Enter Your Password"/>
            <button id="SubmitButton" type="button">Submit</button>
        </div>
        
    
    </div>
  )
}

export default Login