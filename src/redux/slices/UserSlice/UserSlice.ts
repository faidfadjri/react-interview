import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./UserSlice.type";

const initialState: UserState = {
  name: "",
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.name = action.payload.name;
      state.loggedIn = true;
    },
    loggedOut: (state) => {
      state.name = "";
      state.loggedIn = false;
    },
  },
});

export const { loggedIn, loggedOut } = userSlice.actions;
export default userSlice.reducer;
