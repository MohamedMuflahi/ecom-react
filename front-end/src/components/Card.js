import React from 'react';
import "./Card.css";
function Card() {
  return (
    <li className='card'>
      <img src='https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg' alt="cardImage" />
      <h4>ItemName</h4>
      <p>Price: $100.00</p>
        <button className="primary">
          In Stock
        </button>
    </li>
  )
}

export default Card