import { create } from 'zustand';

const useStore = create((set, get) => ({
  // State - Only cart-related state
  cartList: [],

  // Actions
  addToCart: (item) => {
    const { cartList } = get();
    const existingItem = cartList.find(cart => cart.id === item.id);
    
    if (existingItem) {
      set(state => ({
        cartList: state.cartList.map(cart =>
          cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
        )
      }));
    } else {
      set(state => ({
        cartList: [...state.cartList, { ...item, quantity: 1 }]
      }));
    }
  },

  removeFromCart: (itemId) => {
    set(state => ({
      cartList: state.cartList
        .map(cart => 
          cart.id === itemId ? { ...cart, quantity: cart.quantity - 1 } : cart
        )
        .filter(cart => cart.quantity > 0)
    }));
  },

  // Direct cart manipulation (if needed)
  setCartList: (newCartList) => {
    set({ cartList: newCartList });
  },

  // Clear entire cart
  clearCart: () => {
    set({ cartList: [] });
  },

  // Get total items in cart
  getTotalItems: () => {
    const { cartList } = get();
    return cartList.reduce((total, item) => total + item.quantity, 0);
  },

  // Get total price
  getTotalPrice: () => {
    const { cartList } = get();
    return cartList.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));

export default useStore;

