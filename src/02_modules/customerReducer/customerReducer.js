import { createSlice } from "@reduxjs/toolkit";


export const customers = createSlice({
    name: 'customers',
    initialState: {
        value: [],
    },

    reducers: {
        addManyC: (state, action) =>{
            state.value = [...action.payload] 
        },
    }
    
});

export const {addManyC} = customers.actions;

export default customers.reducer;