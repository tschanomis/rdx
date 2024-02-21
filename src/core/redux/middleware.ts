import { Middleware } from "@reduxjs/toolkit";

import setLocalStorage from "../services/localStorage/setLocalStorage";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  try {
    const newItemsList = store.getState().items.value;
    setLocalStorage(newItemsList);
  } catch (error) {
    console.log("set local storage error", error);
  }
  return result;
};

export default localStorageMiddleware;
