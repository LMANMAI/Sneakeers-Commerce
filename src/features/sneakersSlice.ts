import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { ISneakerState, ISneaker } from "../interfaces";

const initialState: ISneakerState = {
  sneakers: [],
  value: 0,
  sneaker_id: "",
  total: 0,
  cartCountProduct: 0,
};

export const sneakerSlice = createSlice({
  name: "sneaker",
  initialState,
  reducers: {
    setSneakerCart: (state, action: PayloadAction<ISneaker>) => {
      state.sneakers = [...state.sneakers, action.payload];
    },
    removeSneakerCart: (state, action: PayloadAction<String>) => {
      state.sneakers = state.sneakers.filter(
        (sneaker) => sneaker._id !== action.payload
      );
    },
    setTotalCart: (state, action: PayloadAction<number>) => {
      state.total += action.payload;
    },
    setCountCartProduct: (state) => {
      state.cartCountProduct += 1;
    },
    setDiscartProduct: (state) => {
      state.cartCountProduct -= 1;
    },
  },
});

export const {
  setSneakerCart,
  removeSneakerCart,
  setTotalCart,
  setCountCartProduct,
  setDiscartProduct,
} = sneakerSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectSneakers = (state: RootState) => state.sneaker.sneakers;
export const selectTotalCart = (state: RootState) => state.sneaker.total;
export const selectCountProduct = (state: RootState) =>
  state.sneaker.cartCountProduct;

export default sneakerSlice.reducer;
