import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers:{
    addProduct: (state,action)=>{
      state.products.push(action.payload)
    },
    removeProduct: (state,action) => {
      state.products.splice(state.products.findIndex(product=>product.id===action.payload),1)
    },
    clearCart: (state)=>{
      console.log(state);
      state.products=[];
    }
  }
})


export const { addProduct, removeProduct,clearCart } = cardSlice.actions
export default cardSlice;