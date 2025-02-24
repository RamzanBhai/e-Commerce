import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          ...action.payload,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalPrice += newItem.price,
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const itemToRemove = state.products.find((item) => item.id === itemId);

      if (itemToRemove) {
        state.totalPrice -= itemToRemove.totalPrice;
        state.totalQuantity -= itemToRemove.quantity;
        state.products = state.products.filter((item) => item.id !== itemId);
      }
    },
    increaseQuantity(state, actions) {
      const itemId = actions.payload;
      const item = state.products.find((item) => item.id == itemId);
      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
        state.totalPrice += item.price;
        state.totalQuantity++;
      }
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const existingItem = state.products.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
          state.totalPrice -= existingItem.price;
          state.totalQuantity--;
        } else {
          state.totalPrice -= existingItem.totalPrice;
          state.totalQuantity -= existingItem.quantity;
          state.products = state.products.filter((item) => item.id !== itemId);
        }
      }
    },
  },
});
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
