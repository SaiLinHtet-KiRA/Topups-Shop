import { apiSlice } from "./apiSlice";
import type { Query } from "@/interface/other";
import type Game from "@/interface/Game";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGames: builder.query<Game[], Query>({
      query: ({ start, limit }) => `/game?page=${start}&limit=${limit}`,
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `/game/${id}`,
    }),
  }),
});

export const { useGetGamesQuery, useGetGameQuery } = authApiSlice;
