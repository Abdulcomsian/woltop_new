import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  sale_price: number | null;
  quantity: number;
  totalPrice: number;
  featured_image: string;
  discount: number;
  variableId?: number;
  installationCharges: number;
  codCharges: number;
  shippingCharges: number;
  thresholdCharges: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  totalCharges: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  totalCharges: 0,
};

const calculateTotalCharges = (items: CartItem[]): number =>
  items.reduce((total, item) => {
    const shippingCharges = item.totalPrice > item.thresholdCharges ? 0 : item.shippingCharges;
    
    return total + item.installationCharges + item.codCharges + shippingCharges + item.thresholdCharges;
  }, 0);

const calculateTotalPrice = (items: CartItem[]): number =>
  items.reduce((total, item) => total + item.totalPrice, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        price: number;
        sale_price: number | null;
        featured_image: string;
        discount: number;
        variableId: number;
        variableName: string;
        installationCharges: number;
        codCharges: number;
        shippingCharges: number;
        thresholdCharges: number;
      }>
    ) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.variableId === newItem.variableId
      );
      const itemPrice = newItem.sale_price ?? newItem.price;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = itemPrice * existingItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: itemPrice,
        });
      }

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = calculateTotalPrice(state.items);
      state.totalCharges = calculateTotalCharges(state.items);
    },

    updateItemQuantity(
      state,
      action: PayloadAction<{
        id: number;
        variableId: number;
        quantity: number;
      }>
    ) {
      const { id, variableId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.variableId === variableId
      );

      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.totalPrice =
          (existingItem.sale_price ?? existingItem.price) * quantity;

        state.totalQuantity = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.totalPrice = calculateTotalPrice(state.items);
        state.totalCharges = calculateTotalCharges(state.items);
      }
    },

    removeItemFromCart(
      state,
      action: PayloadAction<{ id: number; variableId: number }>
    ) {
      const { id, variableId } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && item.variableId === variableId
      );

      if (existingItemIndex !== -1) {
        const removedItem = state.items[existingItemIndex];
        state.totalQuantity -= removedItem.quantity;
        state.items.splice(existingItemIndex, 1);

        state.totalPrice = calculateTotalPrice(state.items);
        state.totalCharges = calculateTotalCharges(state.items);
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.totalCharges = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  updateItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
