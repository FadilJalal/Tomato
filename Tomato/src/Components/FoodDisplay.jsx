import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import FoodList from './FoodList'

const FoodDisplay = ({menulist}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{
                return(
                    <FoodList key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                )
            })}
        </div>
    </div>
  )
}

export default FoodDisplay;
