import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsThunk } from "./productThunk"

const initialState = {
  list: [],
  status: "idle",
  error: null,
  range_start:0,
  range_end:10
};

const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    
    //*** pagination reducers ***/

    one:(state,action)=>{
        state.range_start=0
        state.range_end=10
    },
    two:(state,action)=>{
        state.range_start=10
        state.range_end=20
    },
    three:(state,action)=>{
       state.range_start=30
        state.range_end=40
    },
     prev:(state,action)=>{
       if(state.range==10 || state.range==0) return
       else {
        state.range_start-=10;
        state.range_end-=10
       }
    },
     next:(state,action)=>{
      state.range_start+=10;
      state.range_end+=10
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
export const{one,two,three,next,prev} =productSlice.actions;
