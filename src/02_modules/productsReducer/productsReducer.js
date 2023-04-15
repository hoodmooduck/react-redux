import { createSlice } from "@reduxjs/toolkit";

export const products = createSlice({
    name:'products',
    initialState: {
        value: [],
    },
    reducers: {
        addProducts: (state, action)=>{
            state.value = [...state.value, action.payload]
        },
        removeProducts: (state, action) =>{
            state.value = [...state.value.filter(product => product.id !== action.payload)]
        },
        clearProducts: (state) => {
            state.value = []
        }
    }
})

export const {addProducts, removeProducts, clearProducts} = products.actions;
export default products.reducer;