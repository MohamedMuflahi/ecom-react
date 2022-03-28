import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
      <div id='container'>
      <a className='logo'>
        <img src="https://i.ibb.co/KrDfhMc/2-0-500-250-px-250-250-px.png" alt="logo" className='logo'/>   
      </a>
        <a className='item'>
            <h1 className='item-name'>Home</h1>
        </a>
        <a className='item'>
            <h1 className='item-name'>Products</h1>
        </a>
        <a className='item'>
        <h1 className='item-name'>Log In</h1>
        </a>
        <a className='item'>
            <h1 className='item-name'>Cart</h1>
        </a>
      </div>
  )
}

export default Navbar