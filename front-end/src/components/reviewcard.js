import React from 'react'
import './review-card.css';
import { Rating } from 'react-simple-star-rating'

function reviewcard({item}) {
  return (
        <div className='card-display'>
            <Rating className='rating-counter' initialValue={item.rating} readonly={true}/>
            <h4 id="reviewInfo">{item.content}</h4>
            <h3>{item.user.first_name}</h3>
        </div>
  )
}
export default reviewcard