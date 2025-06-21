
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        showCart:false
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },

        removeItem:(state,action)=>{
            state.items = state.items.filter((val)=>val.id!==action.payload)
        },

        clearCart:()=>{
            state.items = null
        },
        
        showCartMethod:(state)=>{
             state.showCart = !state.showCart
        }

    }
})

export const {addItem, removeItem, clearCart, showCartMethod} = cartSlice.actions;
export default cartSlice.reducer;