import type { AccountInfo } from "@/interface/User";
import { apiSlice } from "./apiSlice";
import type { Query } from "@/interface/other";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGames: builder.query<AccountInfo, Query>({
      query: ({ start, limit }) => `/game?page=${start}&limit=${limit}`,
    }),
  }),
});

export const { useGetGamesQuery } = authApiSlice;
