import {  configureStore } from '@reduxjs/toolkit'
import Home from '../pages/Home'
import cardSlice from './slice/cardSlice'

import favouriteSlice from './slice/favouriteSlice'



export const store = configureStore({
  reducer: {
    Home: cardSlice.reducer,
    Favourite: favouriteSlice.reducer
    }})