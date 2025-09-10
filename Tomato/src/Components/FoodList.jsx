import React from "react";

import { assets } from "../assets/frontend_assets/assets";
import useStore from "../store/useStore";

const FoodList = ({ id, name, price, description, image }) => {
  const { cartList, addToCart, removeFromCart } = useStore();
  
  // Find the current item in cart to get its quantity
  const cartItem = cartList.find(item => item.id === id);
  const itemCount = cartItem ? cartItem.quantity : 0;

  return (
    <div className="food-list">
      {/* Image Section */}
      <div className="food-list-image-container">
        <img className="food-list-image" src={image} alt={name} />

        {!itemCount ? (
          <img
            src={assets.add_icon_white}
            alt="Add"
            className="add"
            onClick={() => addToCart({ id, name, price, description, image })}
          />
        ) : (
          <div className="food-list-counter">
            <img
              src={assets.remove_icon_red}
              alt="Remove"
              onClick={() => removeFromCart(id)}
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt="Add More"
              onClick={() => addToCart({ id, name, price, description, image })}
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
