import React, { useState } from 'react'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import FoodDisplay from '../Components/FoodDisplay';
import AppDownload from '../Components/AppDownload';


const Home = () => {

  const [menuList, setMenuList] = useState("All");

  return (
    <div>
      <Header/>
      <Menu menulist={menuList} setMenuList={setMenuList}/>
      <FoodDisplay menuList={menuList}/>
      <AppDownload/>
    </div>
  )
}

export default Home;