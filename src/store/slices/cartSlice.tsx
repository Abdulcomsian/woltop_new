import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  description: string;
  featured_image: string;
}

// Define the initial state type
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

// Initial state
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Helper function to calculate total price
const calculateTotalPrice = (items: CartItem[]): number =>
  items.reduce((total, item) => total + item.totalPrice, 0);

// Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to the cart
    addItemToCart(
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        price: number;
        description: string;
        featured_image: string;
      }>
    ) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists, increment the quantity and update the total price
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        // If the item doesn't exist, add it with quantity 1 and set the total price
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price, // Set totalPrice to price * 1 (initial quantity)
        });
      }

      // Recalculate totalQuantity and totalPrice after adding the item
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = calculateTotalPrice(state.items);
    },

    // Remove item from the cart
    removeItemFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Decrease quantity and total price
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);

        // Recalculate the total price
        state.totalPrice = calculateTotalPrice(state.items);
      }
    },

    // Clear the entire cart
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },

    // Update item quantity
    updateItemQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Update the item's quantity and recalculate the total price for that item
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;

        // Recalculate totalQuantity and totalPrice
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = calculateTotalPrice(state.items);
      }
    },
  },
});

// Export the actions and reducer
export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  updateItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
