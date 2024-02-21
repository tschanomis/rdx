import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import localStorageMiddleware from "./middleware";

export const store = configureStore({
  reducer: { items: itemsSlice },
  middleware: (middlewares) => middlewares().prepend(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
