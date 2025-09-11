import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {

  const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt={name} />
        {
          !itemCount
            ? <img className='add' src={assets.add_icon_white} onClick={() => setItemCount(itemCount + 1)} />
            : <div className='food-item-counter'>
              <img src={assets.remove_icon_red} onClick={() => setItemCount(itemCount - 1)} />
              <p>{itemCount}</p>
              <img src={assets.add_icon_green} onClick={() => setItemCount(itemCount + 1)} />
            </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">$ {price}</p>
      </div>
    </div>
  )
}

export default FoodItem;