import { useState } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer'; // fixed import
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PlaceOrder from './Pages/PlaceOrder';
import Cart from './Pages/Cart'; // assuming you have a Cart component

const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin && <Login setShowLogin={setShowLogin}/>}
      <div className="app">
        <NavBar showLogin={showLogin} setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
