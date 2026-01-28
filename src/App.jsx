import React from 'react'
import {ProductPage} from './features/products/productPage'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartPage from './features/cart/cartPage';
import Header from './features/header/header';
import Checkout from './features/checkout/checkout';
const App = () => {
  return (
    <div className='parent-class'>
      <Routes>
        <Route path="/product" element={<ProductPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
    </div>
  )
}

export default App
