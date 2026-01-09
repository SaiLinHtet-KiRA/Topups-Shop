import type { AccountInfo } from "@/interface/User";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deposit: builder.mutation<AccountInfo, File>({
      query: (receipt) => {
        const formData = new FormData();
        formData.append("receipt", receipt);

        return {
          url: "/deposit",
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});

export const { useDepositMutation } = authApiSlice;
