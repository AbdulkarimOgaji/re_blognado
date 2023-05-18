import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthLoginResult } from "../authSlice";
import { RootState } from "../store";
import { UserRole } from "../utils/types";

type AuthLoginRequest = {
  email: string;
  password: string;
  role: UserRole;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("x-project", import.meta.env.VITE_X_PROJECT);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthLoginResult, AuthLoginRequest>({
      query: (body) => ({
        url: "/v1/api/login",
        method: "POST",
        body,
      }),
    }),
    check: builder.query<unknown, string>({
      query: (role) => ({
        url: "/v1/api/check",
        method: "POST",
        body: { role },
        headers: {
          authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useCheckQuery } = authApi;
