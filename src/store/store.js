"use client"
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "~/store/slices/cartSlice";
import userReducer from "~/store/slices/userSlice";
import { productsApi } from "./api/productApi";
import { paramApi } from "./api/paramApi";
import { storiesApi } from "./api/storiesApi";
import { reviewsApi } from "./api/reviewsApi";
import { catagoriesApi } from "./api/catagoriesApi";
import { toolsApi } from "./api/toolsApi";
import { faqsApi } from "./api/faqsApi";
import { teamApi } from "./api/teamApi";
import { blogsApi } from "./api/blogsApi";
import { deliveryApi } from "./api/deliveryApi";
import { deliveryPreference } from "./api/deliveryPreference";

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [storiesApi.reducerPath]: storiesApi.reducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer,
  [toolsApi.reducerPath]: toolsApi.reducer,
  [faqsApi.reducerPath]: faqsApi.reducer,
  [teamApi.reducerPath]: teamApi.reducer,
  [blogsApi.reducerPath]: blogsApi.reducer,
  [deliveryApi.reducerPath]: deliveryApi.reducer,
  [deliveryPreference.reducerPath]: deliveryPreference.reducer,
  [catagoriesApi.reducerPath]: catagoriesApi.reducer,
  [paramApi.reducerPath]: paramApi.reducer,
});

// Load state for `cart` and `user` slices from localStorage
const loadState = () => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = localStorage.getItem("reduxState");
      if (serializedState === null) {
        return undefined;
      }
      const parsedState = JSON.parse(serializedState);
      return {
        cart: parsedState.cart || undefined,
        user: parsedState.user || undefined,
      };
    } catch (err) {
      console.error("Error loading state from localStorage:", err);
      return undefined;
    }
  }
  return undefined;
};

// Save only `cart` and `user` slices to localStorage
const saveState = (state) => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = JSON.stringify({
        cart: state.cart,
        user: state.user,
      });
      localStorage.setItem("reduxState", serializedState);
    } catch (err) {
      console.error("Error saving state to localStorage:", err);
    }
  }
};

// Configure the store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(), // Load initial state for cart and user slices
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(productsApi.middleware)
      .concat(storiesApi.middleware)
      .concat(toolsApi.middleware)
      .concat(faqsApi.middleware)
      .concat(teamApi.middleware)
      .concat(deliveryApi.middleware)
      .concat(deliveryPreference.middleware)
      .concat(blogsApi.middleware)
      .concat(reviewsApi.middleware)
      .concat(catagoriesApi.middleware)
      .concat(paramApi.middleware),
});

// Subscribe to store changes and save only cart and user slices to localStorage
store.subscribe(() => {
  saveState(store.getState());
});
