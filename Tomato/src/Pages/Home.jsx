import React, { useState } from 'react'
import Header from '../Components/Header'
import Menu from '../Components/Menu'

const Home = () => {
  const [menulist,setMenuList] = useState('');
  return (
    <div>
      <Header/>
      <Menu menulist={menulist} setMenuList={setMenuList}/>
      
    </div>
  )
}

export default Home