import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets";

// Create the context
export const StoreContext = createContext(null);

// Define the provider
const StoreProvider = ({ children }) => {
    const contextValue = {
        food_list
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
