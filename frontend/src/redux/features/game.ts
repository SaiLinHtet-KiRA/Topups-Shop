import Game from "@/interface/Game";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gameApiSlice } from "../api/Game.api";

const initialState = {} as Game;

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<Game>) => {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      gameApiSlice.endpoints.getGame.matchFulfilled,
      (state, action) => {
        return action.payload;
      }
    );
  },
});

export const { setGame } = gameSlice.actions;

export default gameSlice.reducer;
