import Game from "@/interface/Game";
import { apiSlice } from "./apiSlice";

export const gameApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGames: builder.query<Game[], void>({
      query: () => `/game`,
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `/game/${id}`,
    }),
  }),
});

export const { useGetGamesQuery, useGetGameQuery } = gameApiSlice;
