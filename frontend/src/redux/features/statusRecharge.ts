import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rechargeApiSlice } from "../api/Recharge.api";
import { error } from "console";

const initialState = {
  pending: true,
  success: false,
  error: false,
};

const topupSlice = createSlice({
  name: "recharge",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      rechargeApiSlice.endpoints.createRecharge.matchFulfilled,
      (status, action) => {
        status.pending = false;
        status.success = true;
      }
    );
    builder.addMatcher(
      rechargeApiSlice.endpoints.createRecharge.matchRejected,
      (status, action) => {
        status.pending = false;
        status.error = true;
      }
    );
  },
});

export const {} = topupSlice.actions;

export default topupSlice.reducer;
