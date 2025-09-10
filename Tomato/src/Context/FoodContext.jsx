import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets";

// Create the context for food data
export const FoodContext = createContext(null);

// Define the provider
const FoodProvider = ({ children }) => {
    const contextValue = {
        food_list
    };

    return (
        <FoodContext.Provider value={contextValue}>
            {children}
        </FoodContext.Provider>
    );
};

export default FoodProvider;
