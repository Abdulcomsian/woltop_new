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
import { roomCatagoriesApi } from "./api/roomCatagoriesApi";
import { allProductsApi } from "./api/allProductsApi";
import { homeBannerApi } from "./api/homeBannerApi";
import { wishlistApi } from "./api/wishlistApi";
import { allReviewsApi } from "./api/allReviewsApi";
import { chargessApi } from "./api/chargessApi";
import { contactInfoApi } from "./api/contactInfoApi";
import { aboutApi } from "./api/aboutApi";
import { toolkitApi } from "./api/toolkitApi";

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [allProductsApi.reducerPath]: allProductsApi.reducer,
  [storiesApi.reducerPath]: storiesApi.reducer,
  [homeBannerApi.reducerPath]: homeBannerApi.reducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer,
  [allReviewsApi.reducerPath]: allReviewsApi.reducer,
  [toolsApi.reducerPath]: toolsApi.reducer,
  [faqsApi.reducerPath]: faqsApi.reducer,
  [teamApi.reducerPath]: teamApi.reducer,
  [blogsApi.reducerPath]: blogsApi.reducer,
  [deliveryApi.reducerPath]: deliveryApi.reducer,
  [deliveryPreference.reducerPath]: deliveryPreference.reducer,
  [catagoriesApi.reducerPath]: catagoriesApi.reducer,
  [roomCatagoriesApi.reducerPath]: roomCatagoriesApi.reducer,
  [paramApi.reducerPath]: paramApi.reducer,
  [wishlistApi.reducerPath]: wishlistApi.reducer,
  [chargessApi.reducerPath]: chargessApi.reducer,  
  [contactInfoApi.reducerPath]: contactInfoApi.reducer,  
  [aboutApi.reducerPath]: aboutApi.reducer,  
  [toolkitApi.reducerPath]: toolkitApi.reducer,  
});

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

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(productsApi.middleware)
      .concat(allProductsApi.middleware)
      .concat(storiesApi.middleware)
      .concat(homeBannerApi.middleware)
      .concat(toolsApi.middleware)
      .concat(faqsApi.middleware)
      .concat(teamApi.middleware)
      .concat(deliveryApi.middleware)
      .concat(deliveryPreference.middleware)
      .concat(blogsApi.middleware)
      .concat(reviewsApi.middleware)
      .concat(allReviewsApi.middleware)
      .concat(catagoriesApi.middleware)
      .concat(roomCatagoriesApi.middleware)
      .concat(paramApi.middleware)
      .concat(chargessApi.middleware)
      .concat(contactInfoApi.middleware)
      .concat(aboutApi.middleware)
      .concat(wishlistApi.middleware)
      .concat(toolkitApi.middleware),
});

store.subscribe(() => {
  saveState(store.getState());
});
