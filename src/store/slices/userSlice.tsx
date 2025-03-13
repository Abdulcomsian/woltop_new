import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userInfo: null,
  token: null,
  isRegistered: false,
  purchasedProducts: [], 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload.user;
      state.token = action.payload.access_token;
      state.purchasedProducts = action.payload.products?.ids || [];
    },
    register(state, action) {
      state.isRegistered = true;
      state.userInfo = action.payload.user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = null;
      state.token = null;
      state.isRegistered = false;
      state.purchasedProducts = [];
    },
  },
});

export const { login, register, logout } = userSlice.actions;
export default userSlice.reducer;
