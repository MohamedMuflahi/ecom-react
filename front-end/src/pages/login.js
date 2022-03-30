import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { login } from '../userSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function handleClick(){
    let data = {
      email,
      password
    }
    fetch('http://localhost:9292/login',{
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(data)
    })
    .then(resp=> resp.json())
    .then(d=>{
      dispatch(login(d))
      navigate("/");
    })
    .catch(error => {
      setError('Incorrect Credentials Try again :D');
      console.log(error)
    })
  }
  
  return (
    <div id="background">
        <div id="LoginBox">
            <Link to="/"><img id='logo' src='https://i.ibb.co/KrDfhMc/2-0-500-250-px-250-250-px.png'/></Link>
            <div id="Loginheader">
                <h3>Log in</h3>
                <p>Continue to Shopify 2.0</p>
            </div>
                <input className="Userinputs" type="text" placeholder="Enter Your Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input className="Userinputs" type="password" placeholder="Enter Your Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button id="SubmitButton" type="button" onClick={handleClick}>Submit</button>
            {error? <p className='error'>{error}</p>: null}
        </div>
    </div>
  )
}

export default Login