import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/products/cartSlice";


export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})