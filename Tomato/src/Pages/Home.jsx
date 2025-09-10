import React, { useState } from 'react'
import Header from '../Components/Header'
import FoodDisplay from '../Components/FoodDisplay'
import Menu from '../Components/Menu'


const Home = () => {

  const [menuList, setMenuList] = useState([]);

  return (
    <div>
      <Header/>
      <Menu menulist={menuList} setMenuList={setMenuList}/>
      <FoodDisplay menuList={menuList}/> 
    </div>
  )
}

export default Home