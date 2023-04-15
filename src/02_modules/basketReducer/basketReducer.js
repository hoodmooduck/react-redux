import { createSlice } from "@reduxjs/toolkit";

export const basket = createSlice({
    name: "basket",
    initialState: {
        value: false,
    },
    reducers:{
        changeBasket: (state, action) =>{
            state.value = action.payload
        },
    }
})

export const {changeBasket} = basket.actions;

export default basket.reducer;


















