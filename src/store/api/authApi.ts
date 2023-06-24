import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthLoginResult } from "../authSlice";
import { RootState } from "../store";

type AuthLoginRequest = {
  email: string;
  password: string;
};

export interface ApiError {
  data: any;
  status: string;
  message: string;
  error: boolean;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.access_token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
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
          authorization: `Bearer ${localStorage.getItem("access_token") ?? ""}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useCheckQuery } = authApi;
