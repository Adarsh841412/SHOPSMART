import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from "../features/products/productSlice.jsx"
import { useDispatch } from 'react-redux';
import { fetchProductsThunk } from '../features/products/productThunk.js';
import {one,two,three,next,prev} from "../features/products/productSlice.jsx"

import CartSlice from "../features/cart/cartSlice.jsx"
export const Store=configureStore({

    reducer:{
     ProductSlice,
     CartSlice

    }
});

export function handleDispatch(action, arg){

  switch(arg){
    case "data":
      return Store.dispatch(fetchProductsThunk())
    case "one":
      return Store.dispatch(one("one"))
    case "two":
      return Store.dispatch(two("two"))
    case "three":
      return Store.dispatch(three("three"))
    case "next":
      return Store.dispatch(next("next"))
    case "prev":
      return Store.dispatch(prev("prev"))
    default:
      return
  }
}
