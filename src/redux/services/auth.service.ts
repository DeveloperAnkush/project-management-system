import { UserType } from "../../utlis/types";
import { baseApi } from "./base.service";

export interface LoginCreds {
  email: string;
  password: string;
  fcm_token?: string;
}

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<UserType, LoginCreds>({
      query: (credentials) => ({
        url: "/auth/local",
        method: "POST",
        body: JSON.stringify(credentials),
      }),
    }),
  }),
  overrideExisting: false,
});

// Export hooks for using the loginUser endpoint
export const { useLoginUserMutation } = loginApi;
