
import { assets } from '../assets/frontend_assets/assets'

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className='food-item'>
      <img className='food-item-image' src={image} alt={name} />
      <div className='food-item-info'>
        <div className='food-item-rating'>
          <p className='food-item-name'>{name}</p>
          <img className='food-item-stars' src={assets.rating_starts} alt="rating" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem;
