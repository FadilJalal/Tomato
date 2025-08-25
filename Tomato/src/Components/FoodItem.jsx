import { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
      <img className='food-item-image' src={image} alt={name} />

      {!itemCount ? (
        <img
          className='add'
          onClick={() => setItemCount(prev => prev + 1)}
          src={assets.add_icon_white}
          alt='add'
        />
      ) : (
        <div className='food-item-counter'>
          <img
            className='remove'
            onClick={() => setItemCount(prev => Math.max(prev - 1, 0))}
            src={assets.remove_icon_red}
            alt='remove'
          />
          <p>{itemCount}</p>
          <img
            className='add'
            onClick={() => setItemCount(prev => prev + 1)}
            src={assets.add_icon_green}
            alt='add'
          />
        </div>
      )}

      <div className='food-item-info'>
        <div className='food-item-rating'>
          <p className='food-item-name'>{name}</p>
          <img
            className='food-item-stars'
            src={assets.rating_starts}
            alt='rating'
          />
        </div>
        <p className='food-item-desc'>{description}</p>
        <div className='food-item-footer'>
          <p className='food-item-price'>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
