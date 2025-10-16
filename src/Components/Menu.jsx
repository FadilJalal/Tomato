import { menu_list } from "../assets/frontend_assets/assets.js"

const Menu = ({ menulist, setMenuList }) => {

  // Toggle menu selection
  const toggleMenu = (menuName) => {
    if (menulist.includes(menuName)) {
      setMenuList(menulist.filter(m => m !== menuName)); // remove if already selected
    } else {
      setMenuList([...menulist, menuName]); // add if not selected
    }
  }

  return (
    <div className='menu'>
      <h1>Explore Our Menu</h1>
      <p className='menu-text'>
        Explore a world of culinary possibilities without ever leaving your home.
        Our app offers a diverse menu that caters to every palate, from comforting
        classics to bold new flavors. Browse a wide selection of expertly crafted
        dishes, customize your order with ease, and discover your next favorite meal.
      </p>
      <div className="menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleMenu(item.menu_name)}
            className="menu-list-item"
          >
            <img 
              src={item.menu_image} 
              alt={item.menu_name} 
              className={menulist.includes(item.menu_name) ? "active" : ''} 
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu;
