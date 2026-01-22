import { apiSlice } from "./apiSlice";
import type { Query } from "@/interface/other";
import type { Package } from "@/interface/package";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPackages: builder.query<Package[], Query>({
      query: ({ start, limit }) => `/package?page=${start}&limit=${limit}`,
    }),
  }),
});

export const { useGetPackagesQuery } = authApiSlice;
