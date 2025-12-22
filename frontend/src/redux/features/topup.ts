import { RawTopupforStore } from "@/interface/topup";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {} as RawTopupforStore;

const topupSlice = createSlice({
  name: "topup",
  initialState,
  reducers: {
    setUpdate: (state, action: PayloadAction<RawTopupforStore>) => {
      return action.payload;
    },
  },
});

export const { setUpdate } = topupSlice.actions;

export default topupSlice.reducer;
