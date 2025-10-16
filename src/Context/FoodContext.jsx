    import { createContext, useEffect, useState } from "react";
    import { food_list } from "../assets/frontend_assets/assets";

    export const FoodContext = createContext(null);

    const FoodProvider = ({ children }) => {
        const [cartItems, setCartItems] = useState({});

        const addToCart = (itemId) => {
            if (!cartItems[itemId]) {
                setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
            } else {
                setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            }
        };

        const removeFromCart = (itemId) => {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] - 1,
            }));
        };

        useEffect(()=>{
            console.log(cartItems);
        },[cartItems])

        const contextValue = {
            food_list,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
        };

        return (
            <FoodContext.Provider value={contextValue}>
                {children}
            </FoodContext.Provider>
        );
    };

    export default FoodProvider;