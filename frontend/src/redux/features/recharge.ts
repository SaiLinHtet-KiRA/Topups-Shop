import { RechargeForStore } from "@/interface/recharge";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  recharge: { currency: "MMK", payment: "Kpay" },
} as RechargeForStore;

const topupSlice = createSlice({
  name: "recharge",
  initialState,
  reducers: {
    setUpdate: (state, action: PayloadAction<RechargeForStore>) => {
      return action.payload;
    },
  },
});

export const { setUpdate } = topupSlice.actions;

export default topupSlice.reducer;
