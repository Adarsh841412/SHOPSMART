import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInstance";

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
   
    try {
      const response = await axiosInstance.get("/products");
      return response.data.products;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || "Failed to fetch products"
      );
    }
  }
);
