import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for a cart item
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
}

interface Coupon {
  id: number;
  code: string;
  is_countable: number;
  counting: number | null;
  start_date: string;
  end_date: string;
  percentage: string;
}

// Define the initial state type
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  totalDiscount: 0;
  appliedCoupon: Coupon | null;
}

// Initial state
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  totalDiscount: 0,
  appliedCoupon: null,
};

const calculateTotalPrice = (items: CartItem[]): number =>
  items.reduce((total, item) => total + item.totalPrice, 0);

const calculateTotalDiscount = (items: CartItem[]): number =>
  items.reduce(
    (total, item) =>
      total + (item.price - (item.sale_price ?? item.price)) * item.quantity,
    0,
  );

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
      }>,
    ) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.id === newItem.id && item.variableId === newItem.variableId,
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
        0,
      );
      state.totalPrice = calculateTotalPrice(state.items);
      state.totalDiscount = calculateTotalDiscount(state.items);
    },

    updateItemQuantity(
      state,
      action: PayloadAction<{
        id: number;
        variableId: number;
        quantity: number;
      }>,
    ) {
      const { id, variableId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.variableId === variableId,
      );

      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.sale_price * quantity;

        // Recalculate totalQuantity and totalPrice
        state.totalQuantity = state.items.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        state.totalPrice = calculateTotalPrice(state.items);
        state.totalDiscount = calculateTotalDiscount(state.items);
      }
    },

    removeItemFromCart(
      state,
      action: PayloadAction<{ id: number; variableId: number }>,
    ) {
      const { id, variableId } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && item.variableId === variableId,
      );

      if (existingItemIndex !== -1) {
        const removedItem = state.items[existingItemIndex];
        if (removedItem) {
          state.totalQuantity -= removedItem.quantity;
        }
        state.items.splice(existingItemIndex, 1);

        // Recalculate totalPrice
        state.totalPrice = calculateTotalPrice(state.items);
        state.totalDiscount = calculateTotalDiscount(state.items);
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.totalDiscount = 0;
      state.appliedCoupon = null;
    },

    applyCoupon(state, action: PayloadAction<Coupon>) {
      const coupon = action.payload;
      state.appliedCoupon = coupon;

      if (coupon.percentage) {
        const discountPercentage = parseFloat(coupon.percentage);
        const couponDiscount = (state.totalPrice * discountPercentage) / 100;
        state.totalDiscount += couponDiscount;
        state.totalPrice -= couponDiscount;
      }
    },

    removeCoupon(state) {
      if (state.appliedCoupon) {
        const discountPercentage = parseFloat(state.appliedCoupon.percentage);
        const couponDiscount = (state.totalPrice * discountPercentage) / 100;
        state.totalDiscount -= couponDiscount;
        state.totalPrice += couponDiscount;
        state.appliedCoupon = null;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  updateItemQuantity,
  applyCoupon,
  removeCoupon,
} = cartSlice.actions;
export default cartSlice.reducer;
