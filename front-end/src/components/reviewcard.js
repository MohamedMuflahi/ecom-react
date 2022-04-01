import React from 'react'
import './review-card.css';

function reviewcard({item}) {
  return (
        <div className='card-display'>
            <h3>{item.rating}</h3>
            <h4 id="reviewInfo">{item.content}</h4>
            <h3>{item.user.first_name}</h3>
        </div>
  )
}
export default reviewcard