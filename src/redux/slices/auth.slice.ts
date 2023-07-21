import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../utlis/types";

interface AuthState {
  userData: UserType | null;
}

const initialState: AuthState = {
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserType | null>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;
