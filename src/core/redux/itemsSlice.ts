import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemsState {
  value: Array<string>;
}

const itemsString = localStorage.getItem("appItems");
const items = itemsString ? JSON.parse(itemsString) : [];
//to service ?

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
