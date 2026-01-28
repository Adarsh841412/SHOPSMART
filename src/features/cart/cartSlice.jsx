import { createSlice } from '@reduxjs/toolkit'

const initialState={
    data:[],
    totalPrice:0,
    totalQuantity:0
}





const CartSlice=createSlice({
    name:"cartSlice",
    initialState,

    reducers:{
     
     addProduct:(state,action)=>{
        state.data.push(action.payload)
      
     },
     removeProduct: (state, action) => {
  state.data = state.data.filter(item => item.id !== action.payload.id);
},

    quantityProduct:(state)=>{
    state.quantityProduct=state.data.length
    }
 
    }
});

export const{addProduct,removeProduct,quantityProduct}=CartSlice.actions
export default CartSlice.reducer;



