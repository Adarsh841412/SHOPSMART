import React from 'react'
import { IoCart } from "react-icons/io5";

const Cart = ({count}) => {


  return (
    
        <div className='cart'><IoCart />&nbsp;Cart: {count}</div>

  )
}

export default Cart