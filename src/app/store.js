import { configureStore, createReducer } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import cartReducer from "../features/cart/cartSlice";
import authSliceReducer from "features/auth/authSlice";
import paginationSlice from "features/menus/paginationSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
    auth: authSliceReducer,
    pagination: paginationSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
