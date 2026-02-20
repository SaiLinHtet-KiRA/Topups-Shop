import type { AccountInfo } from "@/interface/User";
import { apiSlice } from "./apiSlice";
import type { Query } from "@/interface/other";
import type Topup from "@/interface/Topup";
import type ReceiptDTO from "@/interface/ReceiptDTO";

interface reponseData {
  size: number;
  data: Topup[] | ReceiptDTO[];
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccountInfo: builder.query<AccountInfo, void>({
      query: () => "/auth/info",
      providesTags: ["AccountInfo"],
    }),
    getHistory: builder.query<reponseData, Query>({
      query: ({ type, limit, page }) =>
        `/auth/history?type=${type}&limit=${limit}&page=${page}`,
    }),
    telegramLogin: builder.mutation<any, string>({
      query: (initData) => ({
        url: "/auth/telegram",
        method: "POST",
        body: { initData },
      }),
      invalidatesTags: ["AccountInfo"],
    }),
  }),
});

export const {
  useGetAccountInfoQuery,
  useTelegramLoginMutation,
  useGetHistoryQuery,
} = authApiSlice;
