import { AccountInfo } from "@/interface/User";
import { createSlice } from "@reduxjs/toolkit";
import { authApiSlice } from "../api/auth";

const initialState = {} as AccountInfo & { coin: number };

const topupSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      authApiSlice.endpoints.success.matchFulfilled,
      (state, action) => {
        return action.payload;
      }
    );
  },
});

export const {} = topupSlice.actions;

export default topupSlice.reducer;
