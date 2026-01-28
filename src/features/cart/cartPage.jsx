import React, { useEffect, useState } from 'react'
import { IoCart } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct, quantityProduct } from './cartSlice';
import Header from "../header/header"
import CartItem from './cartItem';
import Checkout from '../checkout/checkout';
const CartPage = () => {
  const[lenPrice,setLenPrice]=useState([0,0])
  const { data } = useSelector(state => state.CartSlice)
  
  // const [cartData, setCartData] = useState()

  // useEffect(() => {
  //   setCartData(data)
  // }, [data])


function cartSize_price(len,price){
setLenPrice(()=>[len,price])
}


  return (
    <>
     <Header>
  <div className="cart-summary">
    <div className="summary-item">
      <span className="label">Items</span>
      <span className="value">{lenPrice[0]}</span>
    </div>

    <div className="summary-item">
      <span className="label">Total</span>
      <span className="value">₹ {lenPrice[1]}</span>
    </div>
  </div>
</Header>


      <div className='cartPage'>

        <CartItem data={data}  cartSize_price={cartSize_price}/>
        {data.length>0 && <Checkout data={data} price={lenPrice[1]}/>}

      </div>

    </>
  )
}

export default CartPage;
