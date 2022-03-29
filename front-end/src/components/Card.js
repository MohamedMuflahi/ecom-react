import React from 'react';
import "./Card.css";
function Card({item}) {
  return (
    <li className='card'>
      <img src='https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg' alt="cardImage" />
      <h4>{item.name}</h4>
      <p>{`Price $ ${item.price}`}</p>
        <button className="primary">
          Add to Cart
        </button>
    </li>
  )
}

export default Card