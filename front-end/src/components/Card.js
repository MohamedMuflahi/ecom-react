import React from 'react';
import "./Card.css";
import { useNavigate } from "react-router-dom";
function Card({item}) {
  const navigate = useNavigate();
  function handleClick(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    let newcart = [...cart,item]
    localStorage.setItem('cart',JSON.stringify(newcart))
  }
  function handleImgClick(){
    localStorage.setItem('product-detail',JSON.stringify(item))
    navigate('/productdetail')
  }
  return (
    <li className='card'>
      <img src={item.image} alt="cardImage" onClick={handleImgClick}/>
      <h4>{item.title}</h4>
      <p>{`Price $ ${item.price}`}</p>
        <button className="primary" onClick={handleClick}>
          Add to Cart
        </button>
    </li>
  )
}

export default Card