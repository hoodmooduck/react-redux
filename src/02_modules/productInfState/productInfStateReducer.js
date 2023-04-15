import { createSlice } from "@reduxjs/toolkit";


const productInfState = createSlice({
    name:"productInfState",
    initialState: {
        value: {},
    },
    reducers: {
        addProductInf: (state, action) => {
            state.value = action.payload
        },
    }
})


export const {addProductInf} = productInfState.actions;
export default productInfState.reducer;