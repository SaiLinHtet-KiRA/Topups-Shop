import Id from "@/interface/Id";
import { apiSlice } from "./apiSlice";

export const checkidApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkId: builder.query<string | null, { game: string; id: Id }>({
      query: ({ game, id }) => ({
        url: `/check_id` + game,
        method: "POST",
        body: id,
      }),
    }),
  }),
});

export const { useCheckIdQuery } = checkidApiSlice;
