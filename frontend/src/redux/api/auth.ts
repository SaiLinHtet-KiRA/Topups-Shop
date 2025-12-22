import { AccountInfo, PersonalInfo } from "@/interface/User";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    success: builder.query<(AccountInfo & { coin: number }) | undefined, void>({
      query: () => "/auth/success",
    }),
    getUserInfo: builder.query<PersonalInfo, void>({
      query: () => "/auth/info",
    }),
    updateUserInfo: builder.mutation<PersonalInfo, PersonalInfo>({
      query: (data) => ({
        url: "/auth/info",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useSuccessQuery,
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} = authApiSlice;
