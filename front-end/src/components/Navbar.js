import React from 'react'
import './Navbar.css';
import { NavLink, Link } from "react-router-dom"



function Navbar() {
  return (
      <div id='container'>
      <a className='logo'>
      <Link to="/"><img src="https://i.ibb.co/KrDfhMc/2-0-500-250-px-250-250-px.png" alt="logo" className='logo'/></Link>   
      </a>
      <div className='item'>
      <NavLink className="item-name" to="/">Home</NavLink>
      <NavLink className="item-name" to="/login">Login</NavLink>
      <NavLink className="item-name" to="/cart">Cart</NavLink>
      </div>
        <a className='ham'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/250px-Hamburger_icon.svg.png"/>
        </a>
      </div>
  )
}

export default Navbar