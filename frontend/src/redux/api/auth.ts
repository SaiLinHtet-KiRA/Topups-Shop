import type { AccountInfo } from "@/interface/User";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccountInfo: builder.query<AccountInfo, void>({
      query: () => "/auth/profile",
    }),
    telegramLogin: builder.mutation<any, string>({
      query: () => ({
        url: "/auth/telegram?id=" + "7253314643",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetAccountInfoQuery, useTelegramLoginMutation } =
  authApiSlice;
