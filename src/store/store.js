import { combineReducers } from "redux";
import { positionsReducer } from "../features/Positions/positions-slice";
import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "../features/Filters/filters-slice";

const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filtersReducer,
});

export const store = configureStore({ reducer: rootReducer });
