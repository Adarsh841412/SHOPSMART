import React, { useEffect, useState } from 'react'

const checkout = ({data,price}) => {


const[product_data,setProductData] = useState({
    subtotal:0,
    shippingfee:0,
    tax:0,
    total:0
})


useEffect(()=>{

    setProductData(()=>{
        return {
            
    subtotal:price,
    shippingfee:50,
    tax:12,
    total:Math.floor((price+50)+(price*12)/100)
        }
    })
},[price])



  return (
    <div className='checkout'>
     
     <h4>Order Summary</h4>
     <hr style={{opacity:"0.5"}}></hr>
     <p>Subtotal
        <span className='items-value'>
           ₹{product_data.subtotal}
        </span>
     </p>
     <p>Shipping fee
           <span className='items-value'>
           ₹{product_data.shippingfee}
        </span>
     </p>
     <p>Tax
           <span className='items-value'>
           {product_data.tax}%
        </span>
     </p>
     <hr style={{opacity:"0.5"}}></hr>
     <h4>Total
           <span className='items-value'>
           {product_data.total}
        </span>
     </h4>
     <button>Place Order</button>


    </div>
  )
}

export default checkout