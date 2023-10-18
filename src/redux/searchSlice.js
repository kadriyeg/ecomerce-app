
import { createSlice } from "@reduxjs/toolkit"; 
import { STATUS } from "../utils/status";
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    productDetail:[],
    productDetailStatus: STATUS.IDLE,
    };


    export const getSearchProducts = createAsyncThunk ('searchproducts', async(keyword) => {
        const response = await fetch(`https://dummyjson.com/products/search/${keyword}`) ;
        const data = await response.json();
        return data;
    });



const searchSlice = createSlice({
    name: "search", 
    initialState: {
        results: [],
        loading: 'idle',
        error: null,
      },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getSearchProducts.pending, (state) => {
            state.productStatus = 'pending';
          })
          .addCase(getSearchProducts.fulfilled, (state, action) => {
            state.productStatus = 'fulfilled';
            state.results = action.payload;
          })
          .addCase(getSearchProducts.rejected, (state, action) => {
            state.productStatus = 'rejected';
          });
      },
    });




export default searchSlice.reducer;