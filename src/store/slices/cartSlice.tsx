import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for a cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

// Define the initial state type
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

// Initial state
const initialState: CartState = {
  items: [], // Array of cart items
  totalQuantity: 0,
  totalPrice: 0,
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addItemToCart(
      state,
      action: PayloadAction<{ id: string; name: string; price: number }>,
    ) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    // Remove an item from the cart
    removeItemFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;

        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },

    // Clear the cart
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

// Export the actions and reducer
export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
