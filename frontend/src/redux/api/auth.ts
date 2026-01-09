// import { AccountInfo, PersonalInfo } from "@/interface/User";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccountInfo: builder.query<any, null>({
      query: () => "/auth/profile",
    }),
    telegramLogin: builder.mutation<any, string>({
      query: () => ({
        url: "/auth/telegram?id=" + "1665560632",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetAccountInfoQuery,
  useLazyGetAccountInfoQuery,
  useTelegramLoginMutation,
} = authApiSlice;
