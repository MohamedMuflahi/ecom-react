import React from 'react'
import Navbar from '../components/Navbar'
import Cartitem from '../components/Cartitem'
import { Link } from 'react-router-dom'
import "./cart.css"

function Cart() {


  return (
    <div>
      <Navbar />
      <div id="cartTitle">
      <h1>Here's what you have in your cart.</h1>
        <h2>100% Free deliver and returns.</h2>
        <Link to="/"><button id="ContinueShopping" type="button">CONTINUE SHOPPING</button></Link>
        </div>
      <div id="CartText">
        <div id="ItemDiv">
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
        </div>
        <div id="OrderSummary">
          <h1>ORDER SUMMARY</h1>
          <h2>Subtotal</h2>
          <h2>Estimated Shipping</h2>
          <h2>Estimated Total</h2>
          <button id="CheckoutButton" type="button" >CHECKOUT NOW</button>
          <div id="paymentHere">
            <h4>Payment methods</h4>
            </div>
          <img id="payment" src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png" alt="paymentoptions"/>
          
        </div>
      </div>
      
    </div>
  )
}

export default Cart