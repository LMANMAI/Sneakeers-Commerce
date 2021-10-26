import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { ISneakerState, ISneaker } from "../interfaces";

const initialState: ISneakerState = {
  sneakers: [],
  basket: [],
  value: 0,
  sneaker_id: "",
  total: 0,
};

export const sneakerSlice = createSlice({
  name: "sneaker",
  initialState,
  reducers: {
    setSneakers: (state, action: PayloadAction<ISneaker>) => {
      state.sneakers = [...state.sneakers, action.payload];
    },
    setBasket: (state, action: PayloadAction<ISneaker>) => {
      state.basket = [...state.basket, action.payload];
      state.total = state.total + action.payload.price;
    },
    removeSneakerBasket: (state, action: PayloadAction<ISneaker>) => {
      const index = state.basket.findIndex(
        (basketItem) => basketItem._id === action.payload._id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
        state.basket = newBasket;
        state.total = state.total - action.payload.price;
      } else {
        console.warn(
          `No sé pudo remover el producto: ${action.payload._id} no  esta en el carrito`
        );
      }
    },
  },
});

export const { setSneakers, removeSneakerBasket, setBasket } =
  sneakerSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectSneakers = (state: RootState) => state.sneaker.sneakers;
export const selectTotalCart = (state: RootState) => state.sneaker.total;
export const selectBasket = (state: RootState) => state.sneaker.basket;

export default sneakerSlice.reducer;
