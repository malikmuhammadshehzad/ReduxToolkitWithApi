const { createSlice } = require("@reduxjs/toolkit");

 const CartSlice = createSlice({
    name:'Cart',
    initialState:{
       cartData:null
    },
    reducers:{
        addToCart: (state ,action )=>{ 
            state.cartData = { ...state.Data , ...action.payload}
        }
    }
 })

 export const {addToCart}  = CartSlice.actions