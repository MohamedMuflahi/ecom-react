import React from 'react'
import './Cartitem.css';

function Cartitem({item,setCart}) {
  function handleClick(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    let newcart = cart.filter((e)=> e.id !== item.id)
    localStorage.setItem('cart',JSON.stringify(newcart))
    setCart(newcart);
  }
  return (
    <div className='card-div'>
        <img className='item-image' src={item.image} alt="placeholder"/>
        <div className="info-div">
            <h2 className="info-div-item">{item.title}</h2>
            <h3 className="info-div-item">${item.price}</h3>
            <button className="remove-button" on onClick={handleClick}>X</button>
        </div>
    </div>
  )
}

export default Cartitem