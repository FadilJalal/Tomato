import { useState } from "react"; 
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import FoodDisplay from "../Components/FoodDisplay";

const Home = () => {
  const [menulist, setMenuList] = useState("All"); 

  return (
    <div>
      <Header />
      <Menu menulist={menulist} setMenuList={setMenuList} />
      <FoodDisplay menuList={menulist} />
    </div>
  );
};

export default Home;
