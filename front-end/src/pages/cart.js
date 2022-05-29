import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Cartitem from '../components/Cartitem'
import { Link } from 'react-router-dom'
import "./cart.css"

function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')))

  }, [])
  let total = 0;
  cart.forEach(e=> total += e.price)
  let tax = (Math.floor((total*0.0875) * 100) / 100).toFixed(2)
  function handleCheckout(){
    fetch('https://protected-lake-99843.herokuapp.com/create-checkout-session',{
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        price: 'prod_LQKKfH7pFt4BQq'
      }),
      credentials: "same-origin",
    })
    .then(resp=> resp.json())
    .then(data=>{
      window.location.href = data.url;
    })
    .catch(error => {
      
    })
  }
  return (
    <div>
      <Navbar />
      <div id="cartTitle">
      <h1>Here's what you have in your cart.</h1>
        <h2>100% Free deliver and returns.</h2>
        <Link to="/"><button id="ContinueShopping" type="button">CONTINUE SHOPPING</button></Link>
        </div>
        <div className='cart-container'>
          <div className=''></div>
          <div className='cart-box cart-items'>
          {cart.map((item)=>{
        return (
          <>
          <Cartitem key={item.id} item={item} setCart={setCart}/>
          <hr></hr>
          </>
        )
      })}
          </div>
          <div className='cart-box cart-checkout'>
              <h1>Order Summary</h1>
          <div className='total-container'>
            <div>
              <p>Subtotal:</p>
              <p>Estimated Shipping & Handlinng:</p>
              <p>Estimated Tax:</p>
            </div>
            <div className='total-item'>
              <p>${total}</p>
              <p>$0</p>
              <p>${tax}</p>
            </div>
          </div>
            <hr></hr>
            <div className='total-container'>
            <p>Total</p>
            <p className='total-item'>${(Math.floor((total + (total*0.0875)) * 100) / 100).toFixed(2)}</p>
            </div>
            <hr></hr>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
          <div className=''></div>
        </div>
      {/* <div id="CartText">
        <div id="ItemDiv">
        {cart.map((item)=>{
        return <Cartitem key={item.id} item={item}/>
      })}
        </div>
        <div id="OrderSummary">
          <h1>ORDER SUMMARY</h1>
          <h2>Subtotal</h2>
          <h2>Estimated Shipping</h2>
          <h2>Estimated Total</h2>
          <button id="CheckoutButton" type="button" >CHECKOUT NOW</button>
          <div id="paymentHere">
            <button><h4>Payment methods</h4></button>
            </div>
          <img id="payment" src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png" alt="paymentoptions"/>
          
        </div>
      </div> */}
      
    </div>
  )
}

export default Cart