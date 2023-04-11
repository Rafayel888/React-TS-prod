import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { Basket } from './pages/Cart';
import { Home } from './pages/Home';
import { ProductId } from './pages/ProductId';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' data-testid='main-link' element={<Home />} />
        <Route path='basket' data-testid='basket-link' element={<Basket />} />
        <Route path='product/:id/:barCode' element={<ProductId />} />
      </Route>
    </Routes>
  );
}

export default App;
