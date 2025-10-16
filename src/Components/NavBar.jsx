import { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Search, ShoppingCart } from 'lucide-react'


const MenuItems = [
    { name: "Home" },
    { name: "Menu" },
    { name: "Mobile App" },
    { name: "Contact Us" },
]

const NavBar = () => {
    const [underline, setUnderLine] = useState("Home");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="logo" className='logo' />
            <ul className="navbar-menu">
                {MenuItems.map((item, index) => (
                    <li 
                        key={index} 
                        className={underline === item.name ? "active" : ""} 
                        onClick={() => setUnderLine(item.name)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
            <div className='navbar-right'>
                <Search size={30}/>
                <div className='navbar-search-icon'>
                    <ShoppingCart size={30}/>
                    <div className='dot'></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default NavBar;

