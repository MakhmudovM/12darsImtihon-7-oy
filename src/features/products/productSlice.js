/*
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// Асинхронный thunk для загрузки продуктов из db.json
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('../data/db.json')
    return response.data
})

const initialState = {
    products: [],
    total: 0,
    price: 0,
    status: 'idle',
    error: null
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        increaseAmount: (state, { payload }) => {
            const item = state.products.find((product) => {
                return product.id == payload;
            })
            item.amount += 1;
            productsSlice.caseReducers.calculateTotal(state);
        },
        decreaseAmount: (state, { payload }) => {
            const item = state.products.find((product) => {
                return product.id == payload;
            })
            item.amount -= 1;
            productsSlice.caseReducers.calculateTotal(state);
        },
        calculateTotal: (state) => {
            let price = 0;
            let total = 0;

            state.products.forEach((product) => {
                total = total + product.amount;
                price = price + product.amount * product.price;
            });

            state.price = price;
            state.total = total;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

export const { increaseAmount, decreaseAmount, calculateTotal } = productsSlice.actions

export default productsSlice.reducer
*/
