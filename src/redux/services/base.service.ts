import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/config";

export const baseApi = createApi({
  reducerPath: "baseApiReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // prepareHeaders: (headers) => {
    //   // Add any necessary headers, such as authorization tokens, to the request
    //   // For example, if you have a token stored in localStorage:
    //   // const token = localStorage.getItem("token");
    //   // headers.set("Authorization", `Bearer ${token}`);
    //   headers.set("Content-type", "application/json; charset=UTF-8");
    //   return headers;
    // },
  }),
  endpoints: () => ({}),
});
