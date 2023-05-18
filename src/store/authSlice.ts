import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { UserRole } from "./utils/types";

export interface AuthState {
  isAuthenticated: boolean;
  role: UserRole;
  user_id: number;
  token: string;
}

export interface AuthLoginResult {
  role: UserRole;
  user_id: number;
  token: string;
  refresh_token: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  role: "none",
  user_id: 0,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthLoginResult>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
      localStorage.setItem("role", action.payload.role);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("token", action.payload.refresh_token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = "";
      state.role = "none";
      localStorage.removeItem("role");
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.isAuthenticated = true;
        state.token = payload.token;
        state.role = payload.role;
        localStorage.setItem("role", payload.role);
        localStorage.setItem("token", payload.token);
        localStorage.setItem("refresh_token", payload.refresh_token);
      },
    );
    builder.addMatcher(authApi.endpoints.check.matchFulfilled, (state) => {
      state.isAuthenticated = true;
      state.token = localStorage.getItem("token") ?? "";
      state.role = localStorage.getItem("role") as UserRole;
    });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
