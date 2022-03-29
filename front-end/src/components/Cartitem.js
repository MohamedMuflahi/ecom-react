import React from 'react'
import './Cartitem.css';

function Cartitem() {
  return (
    <div id="cardDisplay">
        <img src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" alt="placeholder"/>
        <div id="ItemInfo">
            <h2 id="ItemInfo">Product Name</h2>
            <h2 id="ItemInfo">Qty: </h2>
            <h2 id="ItemInfo">Price</h2>
        </div>
    </div>
  )
}

export default Cartitem