import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import './ProductPage.css';
import { Rating } from 'react-simple-star-rating'
import { useNavigate } from "react-router-dom";
import Reviewcard from '../components/reviewcard';


function Productdetail() {
  const navigate = useNavigate();
  const [item, setItem] = useState({})
  const [reviews, setReviews] = useState([])
  const [reviewInput, setReviewInput] = useState('');
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
  function handleSubmite(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (user.name === undefined){
      // logged in
      let data={
        content: reviewInput,
        rating: rating/20,
        user_id: user.id,
        product_id: item.id
      }
      fetch('http://localhost:9292/review',{
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(data),
      credentials: "same-origin",
    })
    .then(resp=> resp.json())
    .then(data=>{
      console.log(data)
      data.user = user;
      console.log(data)
      setReviews([...reviews,data])
    })
    }else{
      navigate('/login');
    }
  }
  function handleClick(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    let newcart = [...cart,item]
    localStorage.setItem('cart',JSON.stringify(newcart))
  }
  
  useEffect(() => {
    setItem((item)=> item = JSON.parse(localStorage.getItem('product-detail')));
    fetch(`http://localhost:9292/reviews/${JSON.parse(localStorage.getItem('product-detail')).id}`)
    .then(resp=> resp.json())
    .then(data =>{
      console.log(data)
      setReviews(data)
    })
  }, [])
  
  return (
    <>
      <Navbar />
      {/* <div className="product-detail-container"> */}
        <div className="product-detail">
          <img
            src={item.image}
            alt="placeholder"
          ></img>
          <div className="product-detail-right">
            <h1>{item.title}</h1>
            <h3>${item.price}</h3>
            <h4>Reviews</h4>
            <button type="button"onClick={handleClick}>
              Add To Your Cart
            </button>
          </div>
        </div>
        <div className='review-container'>
        <h1 style={{textAlign: 'center'}}>Reviews</h1>
        {reviews.map((item)=>{
        return (
          <Reviewcard key={item.id} item={item} className='review'/>
        )
      })}
        <div className='add-review'>
        <input className='review-field' type="text" placeholder="5 stars please" value={reviewInput} onChange={(e)=> setReviewInput(e.target.value)}/>
        <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
        <button onClick={handleSubmite}>Write a Review!</button>
        </div>
        </div>
    </>
  );
}

export default Productdetail