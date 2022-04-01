import React from 'react'
import Navbar from '../components/Navbar'
import "./success.css"
import { Link } from "react-router-dom";
function Failure() {
  return (
    <>
        <Navbar/>
        <div className='success-container'>
           <div>
            <h1>Payment Declined</h1>
            <p>Thanks for Shopping with Us! You'll find a summary of your recent purchase in the email associated with this account.</p>
            <p>Please allow up to 5 business days to process and shio your order. You will recieve another email when your order has shipped.</p>
            <Link to="/"><button className="continue-button" type="button">GO BACK TO HOME</button></Link>
           </div>
        </div>
    </>
  )
}

export default Failure