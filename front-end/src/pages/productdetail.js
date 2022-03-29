import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom"
import './ProductPage.css';
import Cartitem from '../components/Cartitem';


function Productdetail() {
  return (
    <div>
      <Navbar />
      <div >
        <img id="product-pic" src="https://user-images.githubusercontent.com/13071055/45196982-c7bd6100-b213-11e8-90c9-8c9cdee8717f.png" alt="placeholder"></img>
        </div>
        <div id="product-info">
        <h1>Product Name</h1>
        <h3>Item Price</h3>
        <h4>Reviews</h4>
        <div id="myButtons">
        <button type="button" id="bag-option">Add To Your Cart</button>
        <Link to="/"><button type="button" id="bag-option1">Back To Product List</button></Link>
        </div>
        </div>
        <div id="related-items">
        <h2>Related Products</h2>
        <Cartitem/>
        <Cartitem/>
        <Cartitem/>
        </div>
    </div>
  )
}

export default Productdetail