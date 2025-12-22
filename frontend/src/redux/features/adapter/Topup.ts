import Topup from "@/interface/topup";
import { topupApiSlice } from "@/redux/api/Topup.api";
import { storeState } from "@/redux/store";
import { createEntityAdapter, createSlice, isAnyOf } from "@reduxjs/toolkit";

const TopupAdapter = createEntityAdapter({
  selectId: (state: Topup) => state._id,
  sortComparer: (a: Topup, b: Topup) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
});

const topupSlice = createSlice({
  name: "topup-adapter",
  initialState: TopupAdapter.getInitialState({
    isLoading: true,
  }),
  reducers: {
    addTopup: TopupAdapter.addOne,
    updateOne: TopupAdapter.updateOne,
    removeAllTopup: (state) => {
      state.isLoading = true;
      TopupAdapter.removeAll(state);
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      isAnyOf(topupApiSlice.endpoints.getTopups.matchFulfilled),
      (state, action) => {
        state.isLoading = false;
        TopupAdapter.setMany(
          state,
          action.payload.map((_id) => ({ _id }))
        );
      }
    );
    builder.addMatcher(
      isAnyOf(topupApiSlice.endpoints.getTopup.matchFulfilled),
      (state, action) => {
        TopupAdapter.updateOne(state, {
          id: action.payload._id,
          changes: { ...action.payload },
        });
      }
    );
  },
});

export const { addTopup, removeAllTopup, updateOne } = topupSlice.actions;
export const topupSelectors = TopupAdapter.getSelectors(
  (state: storeState) => state.topups
);
export default topupSlice.reducer;
