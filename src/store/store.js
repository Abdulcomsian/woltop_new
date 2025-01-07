import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "~/store/slices/cartSlice";
import userReducer from "~/store/slices/userSlice";
import { productsApi } from "./api/productApi";
import { paramApi } from "./api/paramApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [paramApi.reducerPath]: paramApi.reducer, // Fixed: Use paramApi.reducerPath
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(paramApi.middleware), // Add paramApi.middleware here
});

export default store;
