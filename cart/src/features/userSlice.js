import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedInUser: storedUser,
  },
  reducers: {
    login: (state, action) => {
      state.loggedInUser = action.payload;
      localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.loggedInUser = null;
      localStorage.removeItem("loggedInUser");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
