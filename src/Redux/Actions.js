import { createSlice } from "@reduxjs/toolkit";

export const allData = createSlice({
  name: "Shopping",
  initialState: {
    values: [],
    tabs: [], 
    tableData: [],
    class: false,
  },
  reducers: {
    tabsItem: (state, { payload }) => {
      state.tabs = payload;
    },
    tableValues: (state, { payload }) => {
      state.tableValues = payload;
    },
    incrementByAmount: (state, action) => {
      state += action.payload;
    },
  },
});

export const { tabsItem, tableValues } = allData.actions;

export default allData.reducer;
