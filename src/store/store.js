import { combineReducers, createStore } from "redux";
import { positionsReducer } from "./positions/positions-reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { filtersReducer } from "./filters/filters-reducer";

const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filtersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
