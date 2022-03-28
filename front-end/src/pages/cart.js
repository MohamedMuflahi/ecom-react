import React from 'react'
import Navbar from '../components/Navbar'
import Cartitem from '../components/Cartitem'

function Cart() {
  return (
    <div>
      <Navbar />
      <div id="CartText">
        <h1>Here's what you have in your cart.</h1>
        <h2>100% Free deliver and returns.</h2>
        <Cartitem />
      </div>
      
    </div>
  )
}

export default Cart