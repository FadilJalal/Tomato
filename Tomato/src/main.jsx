import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import FoodProvider from './Context/FoodContext.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <FoodProvider>
      <App />
    </FoodProvider>
  </BrowserRouter>
);
