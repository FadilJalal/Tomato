import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../Context/StoreContext";

const FoodList = ({ id, name, price, description, image }) => {
  const { cartList, addToCart, removeFromCart } = useContext(StoreContext);

  // Get the current quantity of this item in the cart
  const itemCount = cartList.find(item => item.id === id)?.quantity || 0;

  return (
    <div className="food-list">
      {/* Image Section */}
      <div className="food-list-image-container">
        <img className="food-list-image" src={image} alt={name} />

        {itemCount === 0 ? (
          <img
            className="add"
            onClick={() => addToCart({ id, name, price, description, image })}
            src={assets.add_icon_white}
            alt="Add Item"
          />
        ) : (
          <div className="food-list-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove Item"
            />
            <p>{itemCount}</p>
            <img
              onClick={() => addToCart({ id, name, price, description, image })}
              src={assets.add_icon_green}
              alt="Add Item"
            />
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="food-list-info">
        <div className="food-list-rating">
          <p className="food-list-name">{name}</p>
          <img
            className="food-list-stars"
            src={assets.rating_starts}
            alt="Food Rating"
          />
        </div>
        <p className="food-list-description">{description}</p>
        <p className="food-list-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodList;
