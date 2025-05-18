import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './restaurantCard.css';


const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} style={{color:'yellow'}} className='star'/>);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} style={{color:'yellow'}} className='star' />);
    } else {
      stars.push(<FaRegStar key={i} className='star' />);
    }
  }

  return <div>{stars}</div>;
};

const RestaurantCard = ({name,imageUrl,rating,cuisine}) => {
  return (
    <div className='restaurantCard'>
        <img className='card__img' src={imageUrl} alt="" />
        <h1 className='card__title'>{name}</h1>
        <p className='card__text'>Cuisine: {cuisine}</p>
        <div className="card__icon">
          {renderStars(rating)}
        </div>
    </div>
  )
}

export default RestaurantCard