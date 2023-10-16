import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "@@filters",
  initialState: [],
  reducers: {
    addFilter(state, action) {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFilter(state, action) {
      return state.filter((filter) => filter !== action.payload);
    },
    clearFilters() {
      return [];
    },
  },
});
export const filtersReducer = filtersSlice.reducer;
export const { addFilter, clearFilters, removeFilter } = filtersSlice.actions;
export const selectAllFilters = (state) => state.filters;
