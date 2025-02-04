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
  [catagoriesApi.reducerPath]: catagoriesApi.reducer,
  [paramApi.reducerPath]: paramApi.reducer,
});

// Load state from localStorage (client-side only)
const loadState = () => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = localStorage.getItem("reduxState");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Error loading state from localStorage:", err);
      return undefined;
    }
  }
  return undefined;
};

// Save state to localStorage (client-side only)
const saveState = (state) => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("reduxState", serializedState);
    } catch (err) {
      console.error("Error saving state to localStorage:", err);
    }
  }
};

// Configure the store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(), // Load initial state from localStorage
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
      .concat(blogsApi.middleware)
      .concat(reviewsApi.middleware)
      .concat(catagoriesApi.middleware)
      .concat(paramApi.middleware),
});

// Subscribe to store changes and save state to localStorage
store.subscribe(() => {
  saveState(store.getState());
});