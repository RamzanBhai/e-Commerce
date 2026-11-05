import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.products.find(item => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity += 1
        existingItem.totalPrice += newItem.price
      } else {
        state.products.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        })
      }
      state.totalPrice += newItem.price
      state.totalQuantity += 1
    },
    removeFromCart(state, action) {
      const itemId = action.payload
      const itemToRemove = state.products.find(item => item.id === itemId)

      if (itemToRemove) {
        state.totalPrice -= itemToRemove.totalPrice
        state.totalQuantity -= itemToRemove.quantity
        state.products = state.products.filter(item => item.id !== itemId)
      }
    },
    increaseQuantity(state, action) {
      const itemId = action.payload
      const item = state.products.find(product => product.id === itemId)

      if (item) {
        item.quantity += 1
        item.totalPrice += item.price
        state.totalPrice += item.price
        state.totalQuantity += 1
      }
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload
      const existingItem = state.products.find(item => item.id === itemId)

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
          existingItem.totalPrice -= existingItem.price
          state.totalPrice -= existingItem.price
          state.totalQuantity -= 1
        } else {
          state.totalPrice -= existingItem.totalPrice
          state.totalQuantity -= existingItem.quantity
          state.products = state.products.filter(item => item.id !== itemId)
        }
      }
    },
    clearCart(state) {
      state.products = []
      state.totalQuantity = 0
      state.totalPrice = 0
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
