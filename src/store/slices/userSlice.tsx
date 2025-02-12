import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userInfo: null,
  token: null,
  isRegistered: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload.user;
      state.token = action.payload.token;
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
    },
  },
});

export const { login, register, logout } = userSlice.actions;
export default userSlice.reducer;
