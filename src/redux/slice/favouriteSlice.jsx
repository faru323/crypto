import { createSlice } from '@reduxjs/toolkit'

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState: {
    products: []
  },
  reducers:{
    addProductToFavorites: (state,action)=>{
      state.products.push(action.payload)
    },
    removeProductFromFavorites: (state,action) => {
      state.products.splice(state.products.findIndex(product=>product.id===action.payload),1)
    },
    clearFavorites: (state)=>{
      console.log(state);
      state.products=[];
    }
  }
})


export const { addProductToFavorites, removeProductFromFavorites, clearFavorites } = favouriteSlice.actions
export default favouriteSlice;