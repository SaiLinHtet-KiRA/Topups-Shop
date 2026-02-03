import { apiSlice } from "./apiSlice";
import type { Package } from "@/interface/package";

interface Query {
  userId: string;
  zoneId: string;
  package: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTopup: builder.mutation<Package[], Query>({
      query: (data) => ({
        url: "/topup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateTopupMutation } = authApiSlice;
