import React, { useContext } from 'react';
import { FoodContext } from '../Context/FoodContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({ menuList }) => {
    const { food_list } = useContext(FoodContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You</h2>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    if (menuList.length === 0 || menuList.includes(item.category)) { 
                        return (
                          <FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                            restaurant={item.restaurant}
                          />
                        )
                    }
                    return null;
                })}
            </div> 
        </div>
    );  
}

export default FoodDisplay;
