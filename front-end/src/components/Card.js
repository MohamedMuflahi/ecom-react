import React from 'react';
import "./Card.css";
function Card({item}) {
  return (
    <li className='card'>
      <img src={item.image} alt="cardImage" />
      <h4>{item.title}</h4>
      <p>{`Price $ ${item.price}`}</p>
        <button className="primary">
          Add to Cart
        </button>
    </li>
  )
}

export default Card