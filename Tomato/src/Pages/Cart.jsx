import React from 'react';
import useStore from '../store/useStore';
import { assets } from '../assets/frontend_assets/assets';

const Cart = () => {
  const { cartList, addToCart, removeFromCart, getTotalPrice } = useStore();

  return (
    <div className="cart">
      <h2>Items in your Cart</h2>
      {cartList.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartList.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="cart-item-price">${item.price}</p>
              </div>
              <div className="cart-item-controls">
                <img
                  src={assets.remove_icon_red}
                  alt="Remove"
                  onClick={() => removeFromCart(item.id)}
                />
                <span>{item.quantity}</span>
                <img
                  src={assets.add_icon_green}
                  alt="Add More"
                  onClick={() => addToCart(item)}
                />
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;