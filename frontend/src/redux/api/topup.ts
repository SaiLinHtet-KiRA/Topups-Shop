import type { Query } from "@/interface/other";
import { apiSlice } from "./apiSlice";
import type { Package } from "@/interface/package";

interface Body {
  userId: string;
  zoneId: string;
  package: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTopup: builder.mutation<Package[], Body>({
      query: (data) => ({
        url: "/topup",
        method: "POST",
        body: data,
      }),
    }),
    getTopups: builder.query<any, Query>({
      query: ({ start, limit }) => `/topups?start=${start}&limit=${limit}`,
    }),
  }),
});

export const { useCreateTopupMutation, useGetTopupsQuery } = authApiSlice;
