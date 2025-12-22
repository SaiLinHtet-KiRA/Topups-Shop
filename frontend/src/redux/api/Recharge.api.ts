import Recharge from "@/interface/recharge";
import { apiSlice } from "./apiSlice";

export const rechargeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createRecharge: builder.mutation<Recharge, FormData>({
      query: (data) => ({
        url: `/recharge`,
        method: "POST",
        body: data,
      }),
    }),
    getRecharges: builder.query<Recharge[], void>({
      query: () => "/recharge",
    }),
    getRecharge: builder.query<Recharge, number>({
      query: (id) => "/recharge/" + id,
    }),
  }),
});

export const {
  useCreateRechargeMutation,
  useGetRechargeQuery,
  useGetRechargesQuery,
} = rechargeApiSlice;
