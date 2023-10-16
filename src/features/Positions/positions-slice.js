import { createSlice } from "@reduxjs/toolkit";

export const positionsSlice = createSlice({
  name: "@@positions",
  initialState: [],
  reducers: {
    addPositions(state, action) {
      return action.payload;
    },
  },
});

export const positionsReducer = positionsSlice.reducer;
export const { addPositions } = positionsSlice.actions;

export const selectVisiblePositions = (state, filters) => {
  return state.positions.filter((pos) => {
    const badges = [].concat(
      pos.role,
      pos.level,
      ...pos.languages,
      ...pos.tools,
    );
    return filters.every((filter) => badges.includes(filter));
  });
};
