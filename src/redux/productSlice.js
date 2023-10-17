import { createSlice } from "@reduxjs/toolkit"; 
import { STATUS } from "../utils/status";
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    productDetail:[],
    productDetailStatus: STATUS.IDLE,
    };


    export const getProducts = createAsyncThunk ('getproducts', async() => {
        const response = await fetch('https://dummyjson.com/products') ;
        const data = await response.json();
        return data;
    });

    export const getDetailProduct = createAsyncThunk ('getProduct', async(id) => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        return data;
    });
const productSlice = createSlice({
    name: "products", 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
            builder.addCase(getProducts.pending, (state, action) => {
                state.productStatus = STATUS.LOADING
            })
            builder.addCase(getProducts.fulfilled, (state, action) => {
                state.productStatus = STATUS.SUCCESS
                state.products = action.payload
            })
            builder.addCase(getProducts.rejected, (state, action) => {
                state.productStatus = STATUS.ERROR
            })
            builder.addCase(getDetailProduct.pending, (state, action) => {
                state.productDetailStatus = STATUS.LOADING
            })
            builder.addCase(getDetailProduct.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS
                state.productDetail = action.payload
            })
            builder.addCase(getDetailProduct.rejected, (state, action) => {
                state.productDetailStatus = STATUS.ERROR
            });
        }
    }
);

export default productSlice.reducer;