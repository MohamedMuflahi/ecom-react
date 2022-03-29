import React from 'react'
import './signup.css';

function Signup() {
  return (
    <div id="background">
        <div id="LoginBox">
            <img id='logo' src='https://i.ibb.co/KrDfhMc/2-0-500-250-px-250-250-px.png'/>
            <div id="Loginheader">
                <h3>Sign up!</h3>
                <p>Continue to Shopify 2.0</p>
            </div>
            <div id="Namediv">
                <input id="userInfo" type="text" placeholder="Enter Your First Name"/>
                <input id="userInfo" type="text" placeholder="Enter Your Last Name"/>
                </div>
                <input id="Userinputs" type="text" placeholder="Enter Your Email"/>
                <input id="Userinputs" type="text" placeholder="Enter Your Password"/>
            <button id="SubmitButton" type="button">Create Account</button>
        </div>
        
    
    </div>
  )
}

export default Signup