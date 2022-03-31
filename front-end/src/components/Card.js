import React from 'react';
import "./Card.css";
function Card({item}) {
    function handleClick(){
      let cart = JSON.parse(localStorage.getItem('cart'));
      let newcart = [...cart,item]
      localStorage.setItem('cart',JSON.stringify(newcart))
    }

    return (
    <li className='card'>
      <img src={item.image} alt="cardImage" />
      <h4>{item.title}</h4>
      <p>{`Price $ ${item.price}`}</p>
        <button className="primary" onClick={handleClick}>
          Add to Cart
        </button>
    </li>
  )
}

export default Card