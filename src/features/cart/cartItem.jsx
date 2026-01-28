import React, { useEffect, useState } from 'react'
import apple from "./apple.jpg"
import Header from '../header/header'
import { useCallback } from 'react'
const cartItem = ({data,cartSize_price}) => {


const[cartdata,setCartData]=useState(data)

function setincrdecr(type,id){

  if (type==='-'){


    setCartData((ele)=>{
      return ele.filter((els)=>{
 
       return els.stock !=0
      })
    })



setCartData((data)=>{
  return data.map((ele)=>{
   
    return (ele.sku === id)?{...ele,stock:ele.stock-1,price:ele.price*(ele.stock-1)}:ele
  })
})
  }

    if (type==='+'){

setCartData((data)=>{
  return data.map((ele)=>{
    return (ele.sku === id)?{...ele,stock:ele.stock+1,price:ele.price*(ele.stock+1)}:ele
  })
})
  }
}

console.log(cartdata)

function len_price(){
let price=0;
for(const data of cartdata){
  price+=data.price
}
cartSize_price(cartdata.length,price)

}

useEffect(()=>{
  len_price()
},[cartdata])



useEffect(()=>{
  setCartData((ele)=>{
    return ele.map((els)=>{
      return {...els,stock:1,price:Math.floor(els.price)}
    })
  })
},[])
function remove_item(item){
console.log(item)
  let new_updated_data=cartdata.filter((data)=>{
    return item.sku!=data.sku
  })
  setCartData(new_updated_data)
}


  return (
  
    <div className='CartItem-parent'>
     
    {
    
    cartdata.map((product)=>{
      return (
        <>
         <div className='cartitems'>

       <div className='image'>

       <img src={product.images} alt='img'></img>

       </div>
       <div className='description'>
        <p>{product.title}</p>
        <p>price &#8377;{product.price}</p>
        <div className='actions'>
          <button onClick={()=>setincrdecr("-",product.sku)}>-</button>
          <div>{product.stock}</div>
          <button onClick={()=>setincrdecr("+",product.sku)}>+</button>

        </div>
       </div>
       <div className='remove-button' onClick={()=>{remove_item(product)}}>remove</div>

     </div>
 



        </>
      )
    })



    }

 
    </div>

  )
}

export default cartItem