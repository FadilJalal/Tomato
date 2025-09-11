import React from 'react';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PlaceOrder from './Pages/PlaceOrder';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<cart/>}/>
        <Route path="/Order" element={<PlaceOrder/>} />
      </Routes>
    </div>
  );
};

export default App;