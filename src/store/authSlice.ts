import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { UserRole } from "./utils/types";

export interface AuthState {
  isAuthenticated: boolean;
  role: UserRole;
  user_id: number;
  access_token: string;
}

export interface AuthLoginResult {
  role: UserRole;
  user_id: number;
  access_token: string;
  refresh_token: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  role: "none",
  user_id: 0,
  access_token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthLoginResult>) => {
      state.isAuthenticated = true;
      state.access_token = action.payload.access_token;
      state.role = action.payload.role;
      localStorage.setItem("role", action.payload.role);
      localStorage.setItem("access_token", action.payload.access_token);
      localStorage.setItem("refresh_token", action.payload.refresh_token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.access_token = "";
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
        state.access_token = payload.access_token;
        state.role = payload.role;
        localStorage.setItem("role", payload.role);
        localStorage.setItem("access_token", payload.access_token);
        localStorage.setItem("refresh_token", payload.refresh_token);
      },
    );
    builder.addMatcher(authApi.endpoints.check.matchFulfilled, (state) => {
      state.isAuthenticated = true;
      state.access_token = localStorage.getItem("access_token") ?? "";
      state.role = localStorage.getItem("role") as UserRole;
    });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
