import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isLogin: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const authActions = authSlice.actions;
//authSlice.actions refers to reducer methods we defined,By doing this,we can use reducer methods inside authSlice variable  like this,authActions.login()

export default authSlice.reducer; //Used To Combine All the reducers in the store

//We can see action types from here.
console.log(authActions.login());
console.log(authActions.logout());
