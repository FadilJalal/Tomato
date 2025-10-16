import React, { useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets';
import { FoodContext } from '../Context/FoodContext';

const FoodItem = ({ id, name, price, description, image, restaurant }) => {

  const { cartItems, addToCartToCart, removeFromCart } = useContext(FoodContext);

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt={name} />
        {
          !cartItems[id]
            ? <img className='add' src={assets.add_icon_white} alt='add' onClick={() => addToCart(id)} />
            : <div className='food-item-counter'>
              <img src={assets.remove_icon_red} alt='remove' onClick={() => removeFromCart(id)} />
              <p>{cartItems[id]}</p>
              <img src={assets.add_icon_green} alt='add' onClick={() => addToCart(id)} />
            </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='rating' />
        </div>
        <p className="food-item-restaurant"><strong>Restaurant:</strong> {restaurant}</p>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">$ {price}</p>
      </div>
    </div>
  )
}

export default FoodItem;
