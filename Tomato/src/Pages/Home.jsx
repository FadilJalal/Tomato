import React, { useState } from 'react'
import Header from '../Components/Header'
import Menu from '../Components/Menu';
import FoodDisplay from '../Components/FoodDisplay';


const Home = () => {
  const [menulist,setMenuList] = useState('');
  return (
    <div>
      <Header/>
      <Menu menulist={menulist} setMenuList={setMenuList}/>
      <FoodDisplay menulist={menulist}/> 
    </div>
  )
}

export default Home