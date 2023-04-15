import { createSlice } from "@reduxjs/toolkit";


const comments = createSlice({
    name:"comments",
    initialState:{
        value: [],
        commentSelected:[],
    },
    reducers: {
        addComments: (state, action) =>{
            state.value = [...action.payload]
        },
        selectComments: (state, action)=>{
            state.commentSelected = [...state.value.filter(comm => comm.postId === action.payload)]
        },
        addComment: (state, action)=>{
            state.commentSelected = [...state.commentSelected, action.payload]
        },
    }
})

export const {addComments, selectComments, addComment} = comments.actions
export default comments.reducer