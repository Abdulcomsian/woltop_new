import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "~/store/slices/cartSlice";
import userReducer from "~/store/slices/userSlice";
import { productsApi } from "./api/productApi";
import { paramApi } from "./api/paramApi";
import { storiesApi } from "./api/storiesApi";
import { reviewsApi } from "./api/reviewsApi";
import { catagoriesApi } from "./api/catagoriesApi";

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [storiesApi.reducerPath]: storiesApi.reducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer,
  [catagoriesApi.reducerPath]: catagoriesApi.reducer,
  [paramApi.reducerPath]: paramApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(productsApi.middleware)
      .concat(storiesApi.middleware)
      .concat(reviewsApi.middleware)
      .concat(catagoriesApi.middleware)
      .concat(paramApi.middleware),
});

export const persistor = persistStore(store);
