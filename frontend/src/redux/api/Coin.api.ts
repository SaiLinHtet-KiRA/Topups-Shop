import { apiSlice } from "./apiSlice";
import Coin from "@/interface/Coin";

export const coinApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCoins: builder.query<Coin[], string>({
      query: (currency) => `/coin/` + currency,
    }),
    getCoin: builder.query<Coin, string>({
      query: (id) => `/game/${id}`,
    }),
  }),
});

export const { useGetCoinsQuery, useGetCoinQuery } = coinApiSlice;
