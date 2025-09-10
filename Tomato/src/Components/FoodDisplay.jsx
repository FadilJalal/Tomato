import React from 'react';
import useStore from '../store/useStore';
import FoodList from './FoodList';

const FoodDisplay = () => {
    const { food_list } = useStore();

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You</h2>
            <div className='food-display-list'>
                {food_list.map((item,index)=> {
                    return <FoodList key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                })}
            </div> 
        </div>
    );  
}

export default FoodDisplay;