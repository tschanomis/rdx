import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import items from "../services/localStorage/getLocalStorage";

interface ItemsState {
  value: Array<string>;
}

const initialState: ItemsState = {
  value: items,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;
