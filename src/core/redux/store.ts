import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";

export const store = configureStore({
  reducer: { items: itemsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
