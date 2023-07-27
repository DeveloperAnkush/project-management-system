import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/config";

export const baseApi = createApi({
  reducerPath: "baseApiReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      // Get the token from the localStorage
      const token = localStorage.getItem("token");

      // If the token exists, add it to the headers
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      } else {
        // If the token does not exist, remove the "Authorization" header
        headers.delete("Authorization");
      }

      // add application/json header
      headers.set("Content-type", "application/json; charset=UTF-8");

      // Return the updated headers
      return headers;
    },
  }),
  endpoints: () => ({}),
});
