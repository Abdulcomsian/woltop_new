import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "~/store/slices/cartSlice";
import userReducer from "~/store/slices/userSlice";
import { productsApi } from "./api/productApi";
import { paramApi } from "./api/paramApi";
import { storiesApi } from "./api/storiesApi";
import { reviewsApi } from "./api/reviewsApi";
import { catagoriesApi } from "./api/catagoriesApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [storiesApi.reducerPath]: storiesApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [catagoriesApi.reducerPath]: catagoriesApi.reducer,
    [paramApi.reducerPath]: paramApi.reducer, // Fixed: Use paramApi.reducerPath
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(storiesApi.middleware)
      .concat(reviewsApi.middleware)
      .concat(catagoriesApi.middleware)
      .concat(paramApi.middleware), // Add paramApi.middleware here
});

export default store;
