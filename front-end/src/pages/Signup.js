import React,{useState} from 'react'
import { Link } from "react-router-dom"
import './signup.css';
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [error, setError] = useState('');
  function handleClick(){
    let data = {
      email,
      password,
      first_name,
      last_name
    }
    fetch('https://protected-lake-99843.herokuapp.com/signup',{
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(data)
    })
    .then(resp=> resp.json())
    .then(data=>{
      console.log(data)
      navigate("/login");
    })
    .catch(error => {
      setError('Account Already Exits');
      console.log(error)
    })
  }
  return (
    <div id="background">
        <div id="LoginBox">
            <Link to="/"><img id='logo' src='https://i.ibb.co/KrDfhMc/2-0-500-250-px-250-250-px.png'/></Link>
            <div id="Loginheader">
                <h3>Sign up!</h3>
                <p>Continue to Shopify 2.0</p>
            </div>
            <div id="Namediv">
                <input id="userInfo" type="text" placeholder="Enter Your First Name" value={first_name} onChange={(e)=> setFirstName(e.target.value)}/>
                <input id="userInfo" type="text" placeholder="Enter Your Last Name" value={last_name} onChange={(e)=> setLastName(e.target.value)}/>
                </div>
                <input id="Userinputs" type="text" placeholder="Enter Your Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input id="Userinputs" type="password" placeholder="Enter Your Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button id="SubmitButton" type="button" onClick={handleClick}>Create Account</button>
            {error? <p className='error'>{error}</p>: null}
        </div>
        
    
    </div>
  )
}

export default Signup