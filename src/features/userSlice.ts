import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { IUserState, IUser } from "../interfaces";
const initialState: IUserState = {
  user: null,
  authenticated: false,
  loading: false,
  error: "",
  needVerification: false,
  success: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
      state.authenticated = true;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setUserLogOut: (state) => {
      state.user = null;
      state.authenticated = false;
      state.loading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setVerification: (state) => {
      state.needVerification = true;
    },
    setSucces: (state, action: PayloadAction<string>) => {
      state.success = action.payload;
    },
  },
});
export const {
  setUser,
  setLoading,
  setUserLogOut,
  setError,
  setVerification,
  setSucces,
} = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export const selectLoading = (state: RootState) => state.user.loading;
export const selectError = (state: RootState) => state.user.error;
export const selectVerification = (state: RootState) =>
  state.user.needVerification;
export const selectSuccess = (state: RootState) => state.user.success;
export default userSlice.reducer;
