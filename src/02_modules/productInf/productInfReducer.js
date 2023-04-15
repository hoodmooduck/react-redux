import { createSlice } from "@reduxjs/toolkit";


const productInf = createSlice({
    name:'productInf',
    initialState:{
        value: false
    },
    reducers: {
        changeProduct: (state, actions) => {
            state.value = actions.payload
        }
    }
})

export const {changeProduct} = productInf.actions;
export default productInf.reducer;

