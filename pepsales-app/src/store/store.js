import { configureStore } from "@reduxjs/toolkit";
import stocksReducer from "./stocksSlice";

export const store = configureStore({
  reducer: {
    stocks: stocksReducer,
  },
});
