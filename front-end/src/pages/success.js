import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import "./success.css"
import { Link } from "react-router-dom";
import Confetti from 'react-confetti'
function Success() {
    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify([]))
    }, [])
  return (
    <>
        <Confetti/>
        <Navbar/>
        <div className='success-container'>
           <div>
            <h1>Thank you for your order</h1>
            <p>Thanks for Shopping with Us! You'll find a summary of your recent purchase in the email associated with this account.</p>
            <p>Please allow up to 5 business days to process and shio your order. You will recieve another email when your order has shipped.</p>
            <Link to="/"><button className="continue-button" type="button">CONTINUE SHOPPING</button></Link>
           </div>
        </div>
    </>
  )
}

export default Success