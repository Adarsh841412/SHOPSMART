import React from 'react'
import {ProductPage} from './features/products/productPage'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartPage from './features/cart/cartPage';
import Header from './features/header/header';
import Checkout from './features/checkout/checkout';
import Login from "./features/auth/login"
import Signup from "./features/auth/signup"
const App = () => {
  return (
    <div className='parent-class'>
      <Routes>
        <Route path="/product" element={<ProductPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default App
