import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  role: "admin" | "user" | "none";
  user_id: number;
  token: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  role: "none",
  user_id: 0,
  token: "",
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
