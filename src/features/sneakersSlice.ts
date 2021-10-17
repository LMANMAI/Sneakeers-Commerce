import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { ISneakerState, ISneaker } from "../interfaces";

const initialState: ISneakerState = {
  sneakers: [],
  value: 0,
};

export const sneakerSlice = createSlice({
  name: "sneaker",
  initialState,
  reducers: {
    setSneakerCart: (state, action: PayloadAction<ISneaker>) => {
      state.sneakers = [...state.sneakers, action.payload];
    },
  },
});

export const { setSneakerCart } = sneakerSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectSneakers = (state: RootState) => state.sneaker.sneakers;

export default sneakerSlice.reducer;
