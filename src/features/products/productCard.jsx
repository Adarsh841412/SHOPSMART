import React, { use, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addProduct } from '../cart/cartSlice'
const productCard = ({data}) => {

// add in cart 

const dispatch=useDispatch()

const {range_start,range_end}=useSelector(state=>state.ProductSlice)

let newData=data.slice(range_start,range_end);
useEffect(()=>{
console.log(range_start)
},[range_start])

  return (
    <div className='product-grid'>
{newData.map((data,index)=>{
    return (
       <>
        <div className='productCard'>
      
    <div className='productImage'>
  <img
    src={data.images}
    alt="Apple"
    style={{
      width: "150px",
      height: "150px",
      objectFit: "cover",
      textAlign:"center"
    }}
  />
  <p ><b>{data.title}</b></p>
</div>


    <div className='price-cart'>
        <p><b>₹ {data.price}</b></p>
        <button onClick={()=>dispatch(addProduct(data))}>Add to Cart</button>
    </div>

    
  </div>



       </> 
    )
})}
   


    </div>
  )
}

export default productCard