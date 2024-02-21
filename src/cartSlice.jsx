import { createSlice } from "@reduxjs/toolkit";
import data from "./data.json";

const initialState = {
  products: data.products.map((product) => ({ ...product, quantity: 1 })),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.products = state.products.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    },
  },
});

export const { removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
