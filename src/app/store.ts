import { configureStore } from "@reduxjs/toolkit";
import sneakerReducer from "../features/sneakersSlice";
import userReducer from "../features/userSlice";
export const store = configureStore({
  reducer: {
    sneaker: sneakerReducer,
    user: userReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
