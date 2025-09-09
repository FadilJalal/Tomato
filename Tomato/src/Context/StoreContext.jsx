import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

// Create the context
export const StoreContext = createContext(null);

// Define the provider
const StoreProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]); // cart as a list
    

    // Add item to cart
    const addToCart = (item) => {
        const existingItem = cartList.find(cart => cart.id === item.id);
        if (existingItem) {
            setCartList(prev =>
                prev.map(cart =>
                    cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
                )
            );
        } else {
            setCartList(prev => [...prev, { ...item, quantity: 1 }]);
        }
    };

    // Remove item from cart
    const removeFromCart = (itemId) => {
        setCartList(prev =>
            prev
                .map(cart => 
                    cart.id === itemId ? { ...cart, quantity: cart.quantity - 1 } : cart
                )
                .filter(cart => cart.quantity > 0)
        );
    };

    const contextValue = {
        food_list,
        cartList,
        setCartList,   // exposing setCartList to directly update cart if needed
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
