import { createSlice } from "@reduxjs/toolkit";



const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(localStorage.getItem("cart"));
    }else
    return [];
}

const storeLocalStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,
   
    };

const cartSlice  = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemCard = state.carts.find((item) => item.id === action.payload.id );

            if (isItemCard) {
                const tempCart = state.carts.map((item) => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = item.price * tempQty;

                        return {
                            ...item,
                            quantity: tempQty,
                            totalPrice: tempTotalPrice,
                        };
                    }
                    else {
                        return item;
                    }
                    
                });
                state.carts = tempCart;
                storeLocalStorage(state.carts);
            } else{
                state.carts.push(action.payload);
                storeLocalStorage(state.carts);
            }
        },
        removeFromCart : (state, action) => {
            const tempCart = state.carts.filter((item) => item.id !== action.payload);
            state.carts = tempCart;
            storeLocalStorage(state.carts);
        },

        clearCart: (state) => {
            state.carts = [];
            storeLocalStorage(state.carts);
        },

        getCartTotal:(state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => 
            {
            return  cartTotal + cartItem.price * cartItem.quantity;
            },0)
            state.itemCount = state.carts.itemCount;
    },
},
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
