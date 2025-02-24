import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice';
import SearchSlice from './searchSlice'
const store =configureStore({
  reducer:{
  cart: CartSlice,
  search:SearchSlice,
  }
})
export default store;