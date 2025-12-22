import Recharge from "@/interface/recharge";
import { rechargeApiSlice } from "@/redux/api/Recharge.api";
import { storeState } from "@/redux/store";
import { createEntityAdapter, createSlice, isAnyOf } from "@reduxjs/toolkit";

const TopupAdapter = createEntityAdapter({
  selectId: (state: Recharge) => state.id,
  sortComparer: (a: Recharge, b: Recharge) =>
    new Date(b.time).getTime() - new Date(a.time).getTime(),
});

const topupSlice = createSlice({
  name: "recharge-adapter",
  initialState: TopupAdapter.getInitialState({
    isLoading: true,
  }),
  reducers: {
    addTopup: TopupAdapter.addOne,
    removeAllTopup: (state) => {
      state.isLoading = true;
      TopupAdapter.removeAll(state);
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      isAnyOf(rechargeApiSlice.endpoints.getRecharges.matchFulfilled),
      (state, action) => {
        state.isLoading = false;
        TopupAdapter.setMany(state, action.payload);
      }
    );
    builder.addMatcher(
      isAnyOf(rechargeApiSlice.endpoints.getRecharge.matchFulfilled),
      (state, action) => {
        TopupAdapter.updateOne(state, {
          id: action.payload.id,
          changes: { ...action.payload },
        });
      }
    );
  },
});

export const { addTopup, removeAllTopup } = topupSlice.actions;
export const topupSelectors = TopupAdapter.getSelectors(
  (state: storeState) => state.recharges
);
export default topupSlice.reducer;
