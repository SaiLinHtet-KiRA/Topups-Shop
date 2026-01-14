import type { AccountInfo } from "@/interface/User";
import { apiSlice } from "./apiSlice";
import type Receipt from "@/interface/Receipt";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deposit: builder.mutation<AccountInfo, Receipt>({
      query: (receipt) => {
        const formData = new FormData();
        Object.keys(receipt).map((key) =>
          formData.append(key, receipt[key as keyof Receipt] as string | Blob)
        );

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
