const { createSlice } = require("@reduxjs/toolkit");



const orders = createSlice({
    name:'order',
    initialState: {
        value: []
    },
    reducers: {
        addOrder: (state, action) => {
            state.value = [...state.value, action.payload]
        },
    }
       
})

export const {addOrder} = orders.actions;
export default orders.reducer