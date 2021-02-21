import { combineReducers } from "redux";

import { StoreState } from "../models";
import lists from "./lists";

const rootReducer = combineReducers<StoreState>({
  lists,
});

export default rootReducer;
