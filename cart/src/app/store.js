import userReducer from "../features/userSlice";
import cartReducer from "../features/cartSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducers: {
    user: userReducer,
    cart: cartReducer,
  },
});
