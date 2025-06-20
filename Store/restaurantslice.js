
import { createSlice } from "@reduxjs/toolkit";

const restaurantslice = createSlice({
    name:'restaurant',
    initialState:{},
    reducers:{
        addRestaurant:(state,action)=>{
            state.restaurant = action.payload
        },

        removeRestaurant:()=>{
            state.restaurant = null
        }
    }
})

export const {addRestaurant, removeRestaurant} = restaurantslice.actions;
export default restaurantslice.reducer;