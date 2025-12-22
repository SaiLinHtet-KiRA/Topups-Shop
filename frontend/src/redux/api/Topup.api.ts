import { updateOne } from "../features/adapter/Topup";
import store from "../store";
import { apiSlice } from "./apiSlice";
import Topup, { RawTopupforStore } from "@/interface/topup";

export const topupApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTopup: builder.mutation<Topup, RawTopupforStore, { data: string }>({
      query: (data) => ({
        url: `/topup`,
        method: "POST",
        body: data,
      }),
    }),
    getTopups: builder.query<string[], void>({
      query: () => "/topup",
    }),
    getTopup: builder.query<Topup, string>({
      query: (id) => "/topup/" + id,
    }),
  }),
});

export const { useCreateTopupMutation, useGetTopupsQuery, useGetTopupQuery } =
  topupApiSlice;
